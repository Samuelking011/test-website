terraform {
  required_version = ">= 0.13.5"
  backend "remote" {
    organization = "Sammyvirtual-solution"

    workspaces {
      name = "test_website"
    }
  }
}

provider "aws" {
        region = "us-east-1"
}
