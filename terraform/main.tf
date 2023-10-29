# creating instance resource
resource "aws_instance" "ec2_instance" {
    ami = "${var.ami_id}"
    count = "${var.number_of_instances}"
    subnet_id = aws_subnet.ec2_public[count.index].id
    instance_type = "${var.instance_type}"
    key_name = "${var.ami_key_pair_name}"

    tags = {
      Name = "Terraform ec2"
    }

    user_data = <<-EOF
            #!/bin/bash
            sudo apt update -y
            sudo apt update -y
            sudo apt install -y docker.io
            sudo systemctl enable docker
            sudo systemctl start docker
            sudo usermod -aG docker ubuntu
            sudo yum install npm -y
            EOF
}