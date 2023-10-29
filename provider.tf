/*terraform {
  cloud {
    organization = "Sammyvirtual-solution"

    workspaces {
      name = "test_website"
    }
  }
}*/

provider "aws" {
        region = "us-east-1"
}