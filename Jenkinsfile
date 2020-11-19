pipeline {
  agent any



  tools {
    nodejs 'node'
  }
  environment {
    PROJECT_NAME = 'my-angular-app'
    //GROOVY_HOME = tool name: 'Groovy-2.4.9', type: 'hudson.plugins.groovy.GroovyInstallation'
    //GIT_COMMIT_SHORT = "${env.GIT_COMMIT.take(8)}"
   // ZIP_FILE_NAME = ''
   // ARTIFACTORY_BASE_URL = "https://ci.dts.utah.gov/artifactory/dts-npm-local/dts-bp-ui/"
  }

  stages {
    stage('Environment') {
      steps {
        echo('Echoing Environment...')

        bat """
					 npm install @angular/cli
					 npm update

					 npm i --save node-sass
					 print PROJECT_NAME ${PROJECT_NAME}
					 npm -version
					"""
      }
    }
    /* stage('Run Groovy') {
        steps {
            bat "${groovy_home}/bin/groovy <script.name>"
        }
    } */
    stage('Build Dev') {
      steps {
        print "Removing dist directory if one exist."

        bat """
          dir
          if exist "dist\\" rd /q /s dist
          dir
        """
       // bat 'npm install'
        bat 'npm run build'
      }

    }

  }
 }
