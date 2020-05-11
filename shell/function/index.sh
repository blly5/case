#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

function step_color() {
  red=$(printf '\033[31m')
  blue=$(printf '\033[34m')
  reset=$(printf '\033[m')
}

step_color

read -p "Please Input: " text

echo "${blue} ${text} ${reset}"