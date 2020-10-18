#!/usr/bin/env bash

TAG="$1"

CURRENTDIR=`pwd`

MAINFILE="blocks.php"

GITPATH="$CURRENTDIR"

echo 
echo "Preparing for new version."
echo 

VERSION=$(grep -w "Version:" $GITPATH/$MAINFILE | awk '{print $3}')

git add .

git commit -m"Latest release $VERSION"

git tag $VERSION

echo
echo "Pre version: $VERSION"
echo

#sed -i -e "s/\(Version: \).*/\1$TAG/" $GITPATH/$MAINFILE