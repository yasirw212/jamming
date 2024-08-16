pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS
    }

    stages {
        stage('Pull code from git') {
            steps {
                git branch: 'main', url: 'https://github.com/yasirw212/jamming.git'
            }
        }

        stage('Build') {
            steps {
                sh ('docker build -t yasirwilliams/jamming-app:latest .')
            }
        }

        stage('Login') {
            steps {
                sh ('echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin')
            }
        }
        stage('Push'){
            steps {
                sh ('docker push yasirwilliams/jamming-app:latest')
            }
        }
        post {
            always {
                sh 'docker logout'
            }
        }
    }
}
