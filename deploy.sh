#!/bin/sh
# @author: Alexandre Plennevaus
# @description: MIRROR DISTANT FOLDER TO LOCAL FOLDER VIA FTP
#
# FTP LOGIN

HOST=$host
USER=$user
PASSWORD=$password

#DISTANT DIRECTORY
REMOTE_DIR='public_html'

#LOCAL DIRECTORY
LOCAL_DIR='.'
ls
pwd

# RUNTIME!
echo
echo "Starting download $REMOTE_DIR from $HOST to $LOCAL_DIR"
date

lftp -u "$USER","$PASSWORD" $HOST <<EOF
cd $REMOTE_DIR
pwd
ls
exit
EOF

echo
echo "Transfer finished"
date

