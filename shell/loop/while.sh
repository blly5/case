#!/bin/bash

while [ "$yn" != "y" -a "$yn" != "Y" ]
do
  read -p "Please input y/Y to stop this program:" yn
done
  echo "Ok"
