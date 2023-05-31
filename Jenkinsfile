
//pipeline {
 //   agent any

 //   stages {
     

  //      stage('Build') {
  //          steps {
                // Install dependencies and build React.js project
  //            checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/jerald06/cosecant.git']])
  //              bat 'npm install'
 //           }
 //       }
//
     
 //   stage('Build Docker image') {
 //     steps {
 //       script {
 //         docker.build("18-alpine").file("./Dockerfile").build()
 //       }
  //    }
 //   }
    

 //   stage('Run Docker container') {
 //     steps {
  //      script {
  //        docker.image('18-alpine').run('-p 8009:3000')
//        }
  //    }
  //  }
 //   }


//}

pipeline {
    agent {
        docker {
            docker.build("18-alpine").file("./Dockerfile").run('-p 8009:3000')
        }
    }
    stages {
        stage('Build') { 
            steps {
                bat 'npm install' 
            }
        }
    }
}

