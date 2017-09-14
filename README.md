[![Build Status](https://travis-ci.org/csulbacm/ACM-Website-2017.svg?branch=deploy)](https://travis-ci.org/csulbacm/ACM-Website-2017)

# ACM-Website-AngularJS
ACM website build with AngularJS for easier update content without database.

## Getting Started
Clone the repo

### Prerequisties
This project required node, npm and bower. (Grunt is optional)
1. Refer to this guide for installing node and npm: https://docs.npmjs.com/getting-started/installing-node
```bash
sudo apt-get install node
npm install -g bower
```

### Installing
Install npm packages:
```bash
npm install
```

Install bower components:
```bash
bower install
```

### Hosting Local
Hosting local can be down using Python HTTP server or Grunt

- With Python
```bash
# Go to index.html
python -m SimpleHTTPServer <port>
```

- With Grunt
```bash
# Install Grunt dependencies
grunt install
# serve
grunt serve
```

### Deployment
The website is hosting on csulb.hosting.acm.org
The website is automatically deploy on branch: deploy through TravisCI