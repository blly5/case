#!/bin/bash

users=$(cut -d ':' -f1 /etc/passwd)

for username in $users
do
echo "$username"
done