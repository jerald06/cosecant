
pipeline {
    agent any

    stages {
     

        stage('Build') {
            steps {
                // Install dependencies and build React.js project
              checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/jerald06/cosecant.git']])
                bat 'npm install'
            }
        }

        stage('Docker Build and Publish') {
            steps {
                // Build and publish Docker image
                image 'node:lts-bullseye-slim'
                 args '-p 3000:3000'
            }
        }
    }
}

