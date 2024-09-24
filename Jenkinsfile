pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Replace with your GitHub repository URL
                git 'https://github.com/yourusername/your-repo.git'
            }
        }
        stage('Build') {
            steps {
                // Run npm commands to install and build the project
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
