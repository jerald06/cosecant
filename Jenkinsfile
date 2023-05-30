/*
pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('valaxy-dockerhub')
    }
    stages {
        stage('SCM Checkout'){
            steps{
                git 'https://github.com/jerald06/cosecant.git'
            }
        }

        stage('Build docker image'){
            steps {
                sh 'docker build -t valaxy/src/app.js:$BUILD_NUMBER .'
            }
        }

        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB__CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('push image'){
            steps{
                sh 'docker push valaxy/src/app.js:$BUILD_NUMBER'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
*/
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the GitHub repository
                git url: 'https://github.com/jerald06/cosecant.git'
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build React.js project
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Docker Build and Publish') {
            steps {
                // Build and publish Docker image
                script {
                    def app = docker.build('myapp:latest', '-f Dockerfile .')
                    app.push()
                }
            }
        }
    }
}