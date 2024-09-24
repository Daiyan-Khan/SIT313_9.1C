pipeline {
    agent any

    environment {
        NODE_ENV = 'production' // Environment variable example
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Daiyan-Khan/SIT313_9.1C.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm install' // Install dependencies
                sh 'npm run build' // Build the project
                archiveArtifacts artifacts: '**/dist/*', allowEmptyArchive: true // Create build artifacts
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test' // Run your test suite (Jest, Mocha, etc.)
            }
            post {
                always {
                    echo 'Publishing test results...'
                    junit 'reports/junit.xml' // Publish Jest test results (after configuring Jest for JUnit output)
                }
                success {
                    echo 'Tests passed successfully.'
                }
                failure {
                    echo 'Tests failed. Please check the logs and test results.'
                }
            }
        }

        stage('Code Quality Analysis') {
            steps {
                echo 'Running code quality analysis...'
                sh 'npx eslint src'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to the staging environment...'
                // Example of deploying with Docker
                sh 'docker-compose -f docker-compose.staging.yml up -d' 
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'docker-compose up -d'
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                echo 'Configuring monitoring and alerting...'
                // Integrate tools like Datadog or New Relic
                // Example: curl command to trigger a deployment event in New Relic
                sh 'curl -X POST https://api.newrelic.com/v2/applications/<app-id>/deployments.json \
                    -H "X-Api-Key:<your-new-relic-api-key>" \
                    -d "deployment[revision]=${env.GIT_COMMIT}" \
                    -d "deployment[description]=Deployed to Production by Jenkins"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed'
        }
    }
}
