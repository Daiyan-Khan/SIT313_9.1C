pipeline {
    agent any
    
    stages {
        stage('Checkout') {
        stage('Build') {
            steps {
                // Run npm commands to install and build the project
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
}
