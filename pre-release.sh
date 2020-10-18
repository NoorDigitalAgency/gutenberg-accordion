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

git commit -m"Latest release v$VERSION"

git tag v$VERSION

echo
echo "Pre version: v$VERSION"
echo

#sed -i -e "s/\(Version: \).*/\1$TAG/" $GITPATH/$MAINFILE