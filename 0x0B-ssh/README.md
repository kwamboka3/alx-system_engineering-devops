# 0x0B. SSH
## Description

    What is a server
    Where servers usually live
    What is SSH
    How to create an SSH RSA key pair
    How to connect to a remote host using an SSH RSA key pair
    The advantage of using #!/usr/bin/env bash instead of /bin/bash
## Table of contents
Files | Description
----- | -----------
[0-use_a_private_key](./0-use_a_private_key) | Bash script that uses ssh to connect to your server using the private key ~/.ssh/school with the user ubuntu
[1-create_ssh_key_pair](./1-create_ssh_key_pair) | Bash script that creates an RSA key pair.
[2-ssh_config](./2-ssh_config) | Share your SSH client configuration 
[100-puppet_ssh_config.pp](./100-puppet_ssh_config.pp) | set up client SSH configuration to connect to server without typing a password
