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
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}