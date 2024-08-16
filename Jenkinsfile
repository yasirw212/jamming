pipeline {
    agent any

    stages {
        stage('Pull code from git') {
            steps {
                git ('https://github.com/yasirw212/jamming.git')
            }
        }

        stage('Build') {
            sh ('docker build -t jamming-app:latest')
        }
    }
}
