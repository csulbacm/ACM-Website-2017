#!/bin/sh
# @author: Alexandre Plennevaus
# @description: MIRROR DISTANT FOLDER TO LOCAL FOLDER VIA FTP
#
# FTP LOGIN

HOST=$host
USER=$user
PASSWORD=$password

#DISTANT DIRECTORY
REMOTE_DIR='/'

#LOCAL DIRECTORY
LOCAL_DIR='.'

# RUNTIME!
echo
echo "Starting download $REMOTE_DIR from $HOST to $LOCAL_DIR"
date

lftp -u "$USER","$PASSWORD" $HOST <<EOF
lcd .
pwd
ls
exit
EOF

echo
echo "Transfer finished"
date

