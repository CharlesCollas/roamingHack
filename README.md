# roamingHack

## Introduction

A Node.js script to avoid Data roaming bill while reading your emails.

## Installation

First clone the repository
```
git clone https://github.com/CharlesCollas/roamingHack.git
```

or download the zip tarball
```
https://github.com/CharlesCollas/roamingHack/archive/master.zip
```

## Usage

A few things need to be installed before being able to use this script.
Because it's a Node.js script, you have to install node : you can download it here http://nodejs.org/download/

Then you need the node module restify to create a server on which we can handle REST API requests :

```
npm install restify
```

And to finish, you need to install gammu to be able to send SMS : http://wammu.eu/docs/manual/project/install.html
Don't forget to change the phone number on line 24 by the one of the SIM on the old cell phone which will send the SMS.
