terraform {
  required_providers {
    apigee = {
      source  = "scastria/apigee"
      version = "~> 0.1.0"
    }
  }
}

resource "apigee_target_server" "mock-target-v1" {
  environment_name = var.environment_name
  name             = "MockTarget-v1"
  host             = "mocktarget.apigee.net"
  port             = 80
}
