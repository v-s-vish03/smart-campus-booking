pipeline {
    agent {
        docker { image 'node:18' }
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/v-s-vish03/smart-campus-booking.git'
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
                echo '✅ Smart Campus Booking System Deployed Locally'
            }
        }
    }

    post {
        success {
            echo '🎉 Build and Deployment Successful'
        }
        failure {
            echo '❌ Build or Deployment Failed. Check Logs.'
        }
    }
}
