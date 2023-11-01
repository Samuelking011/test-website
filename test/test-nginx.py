# test_nginx.py

import unittest
import requests

class TestNginx(unittest.TestCase):
    
    def test_nginx_response(self):
        response = requests.get("http://localhost")
        self.assertEqual(response.status_code, 200, "NGINX did not respond with 200 OK status code")

if __name__ == '__main__':
    unittest.main()
