#!/usr/bin/env python3
import requests
import json
import time
from datetime import datetime
import re

# Base URL from frontend/.env
BASE_URL = "https://bf3f9735-14eb-41ec-9282-a20ad0f6fb0a.preview.emergentagent.com"

def test_health_endpoint():
    """Test the API health endpoint"""
    print("\n=== Testing API Health Endpoint ===")
    
    url = f"{BASE_URL}/api/status"
    print(f"Making GET request to: {url}")
    
    try:
        response = requests.get(url)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        assert response.json()["status"] == "success", "Expected status 'success'"
        assert "API is healthy" in response.json()["message"], "Expected 'API is healthy' in message"
        assert "timestamp" in response.json(), "Expected timestamp in response"
        
        print("✅ Health endpoint test passed!")
        return True
    except Exception as e:
        print(f"❌ Health endpoint test failed: {str(e)}")
        return False

def test_contact_form_valid_data():
    """Test the contact form submission with valid data"""
    print("\n=== Testing Contact Form Submission with Valid Data ===")
    
    url = f"{BASE_URL}/api/contact"
    print(f"Making POST request to: {url}")
    
    valid_data = {
        "name": "John Doe",
        "email": "john@example.com",
        "organization": "Tech Startup",
        "service": "Startup Acceleration",
        "message": "Interested in your services"
    }
    
    print(f"Request payload: {json.dumps(valid_data, indent=2)}")
    
    try:
        response = requests.post(url, json=valid_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        assert response.json()["status"] == "success", "Expected status 'success'"
        assert "id" in response.json(), "Expected id in response"
        assert "timestamp" in response.json(), "Expected timestamp in response"
        
        # Save the submission ID for later verification
        submission_id = response.json()["id"]
        print(f"✅ Contact form submission test passed! Submission ID: {submission_id}")
        return submission_id
    except Exception as e:
        print(f"❌ Contact form submission test failed: {str(e)}")
        return None

def test_contact_form_invalid_data():
    """Test the contact form submission with invalid data"""
    print("\n=== Testing Contact Form Submission with Invalid Data ===")
    
    url = f"{BASE_URL}/api/contact"
    
    # Test case 1: Missing required field (name)
    invalid_data_1 = {
        "email": "john@example.com",
        "organization": "Tech Startup",
        "service": "Startup Acceleration",
        "message": "Interested in your services"
    }
    
    print("\nTest Case 1: Missing required field (name)")
    print(f"Request payload: {json.dumps(invalid_data_1, indent=2)}")
    
    try:
        response = requests.post(url, json=invalid_data_1)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text[:200]}...")  # Truncate long responses
        
        assert response.status_code == 422, f"Expected status code 422, got {response.status_code}"
        print("✅ Test Case 1 passed! Server correctly rejected missing required field")
    except Exception as e:
        print(f"❌ Test Case 1 failed: {str(e)}")
    
    # Test case 2: Invalid email format
    invalid_data_2 = {
        "name": "John Doe",
        "email": "invalid-email",
        "organization": "Tech Startup",
        "service": "Startup Acceleration",
        "message": "Interested in your services"
    }
    
    print("\nTest Case 2: Invalid email format")
    print(f"Request payload: {json.dumps(invalid_data_2, indent=2)}")
    
    try:
        response = requests.post(url, json=invalid_data_2)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text[:200]}...")  # Truncate long responses
        
        assert response.status_code == 422, f"Expected status code 422, got {response.status_code}"
        print("✅ Test Case 2 passed! Server correctly rejected invalid email format")
    except Exception as e:
        print(f"❌ Test Case 2 failed: {str(e)}")
    
    # Test case 3: Missing required field (message)
    invalid_data_3 = {
        "name": "John Doe",
        "email": "john@example.com",
        "organization": "Tech Startup",
        "service": "Startup Acceleration"
    }
    
    print("\nTest Case 3: Missing required field (message)")
    print(f"Request payload: {json.dumps(invalid_data_3, indent=2)}")
    
    try:
        response = requests.post(url, json=invalid_data_3)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text[:200]}...")  # Truncate long responses
        
        assert response.status_code == 422, f"Expected status code 422, got {response.status_code}"
        print("✅ Test Case 3 passed! Server correctly rejected missing required field")
    except Exception as e:
        print(f"❌ Test Case 3 failed: {str(e)}")

def test_admin_submissions_endpoint(expected_id=None):
    """Test the admin endpoint for contact submissions"""
    print("\n=== Testing Admin Submissions Endpoint ===")
    
    url = f"{BASE_URL}/api/contact/submissions"
    print(f"Making GET request to: {url}")
    
    try:
        response = requests.get(url)
        print(f"Status Code: {response.status_code}")
        
        # Print a sample of the response to avoid overwhelming output
        submissions_data = response.json()
        submission_count = submissions_data.get("count", 0)
        print(f"Total submissions: {submission_count}")
        
        if submission_count > 0:
            print("Sample submission:")
            print(json.dumps(submissions_data["submissions"][0], indent=2))
        
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        assert "status" in response.json(), "Expected status in response"
        assert "count" in response.json(), "Expected count in response"
        assert "submissions" in response.json(), "Expected submissions in response"
        
        # If we have a specific submission ID to verify, check if it's in the results
        if expected_id:
            submission_ids = [sub["id"] for sub in response.json()["submissions"]]
            assert expected_id in submission_ids, f"Expected to find submission ID {expected_id} in results"
            print(f"✅ Successfully verified submission ID {expected_id} in database")
        
        print("✅ Admin submissions endpoint test passed!")
        return True
    except Exception as e:
        print(f"❌ Admin submissions endpoint test failed: {str(e)}")
        return False

def run_all_tests():
    """Run all tests in sequence"""
    print("\n======= STARTING API TESTS =======")
    print(f"Testing against base URL: {BASE_URL}")
    print("==================================\n")
    
    # Test 1: Health endpoint
    health_test_passed = test_health_endpoint()
    
    # Test 2: Contact form with valid data
    submission_id = test_contact_form_valid_data()
    
    # Test 3: Contact form with invalid data
    test_contact_form_invalid_data()
    
    # Test 4: Admin submissions endpoint
    # Wait a moment to ensure the submission is processed
    if submission_id:
        print("Waiting 2 seconds for submission to be processed...")
        time.sleep(2)
        admin_test_passed = test_admin_submissions_endpoint(submission_id)
    else:
        admin_test_passed = test_admin_submissions_endpoint()
    
    # Summary
    print("\n======= TEST SUMMARY =======")
    print(f"Health Endpoint: {'✅ PASSED' if health_test_passed else '❌ FAILED'}")
    print(f"Contact Form Submission: {'✅ PASSED' if submission_id else '❌ FAILED'}")
    print(f"Admin Submissions Endpoint: {'✅ PASSED' if admin_test_passed else '❌ FAILED'}")
    print("============================\n")

if __name__ == "__main__":
    run_all_tests()