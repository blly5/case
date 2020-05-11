#!/bin/bash

# $() || `` 用来执行执行完成引号内命令
# $abc || ${abc} 用作变量替换，建议使用 ${abc}



PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

read -p "Please input your firstName:" firstName

read -p "Please input your firstName:" lastName

echo -e "\n Your Full Name is: ${firstName} ${lastName}"
