#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

read -p "Please input your firstName:" firstName

read -p "Please input your firstName:" lastName

echo -e "\n Your Full Name is: $firstName $lastName"
