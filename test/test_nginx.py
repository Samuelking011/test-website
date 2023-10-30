import requests
import unittest
import subprocess
import time

class TestNginxConfig(unittest.TestCase):

    def setUp(self):
       # Start your Docker container here
        # Use stdout=subprocess.PIPE to capture the output
        process = subprocess.Popen(["docker", "run", "-d", "-p", "8080:80", "website"], stdout=subprocess.PIPE)
        
        # Read the output of the process and decode it from bytes to string
        self.container_id = process.stdout.read().decode().strip()
        
        # Wait for the container to start (adjust the sleep duration as needed)
        time.sleep(2)

    def test_nginx_response(self):
        response = requests.get("http://localhost:8080")  # Adjust the URL and port as per your Docker configuration
        self.assertEqual(response.status_code, 200)
        # Add more assertions based on the expected content and structure of your Nginx response

    def tearDown(self):
        # Stop and remove your Docker container here
        subprocess.Popen(["docker", "stop", self.container_id])
        time.sleep(5)
        subprocess.Popen(["docker", "rm", self.container_id])

if __name__ == "__main__":
    unittest.main()
