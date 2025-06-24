pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/v-s-vish03/smart-campus-booking.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy Locally') {
            steps {
                sh 'nohup node index.js &'
                echo 'Smart Campus Booking System Deployed Locally'
            }
        }
    }
}
