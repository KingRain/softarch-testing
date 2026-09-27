"use client";

import CodeBlock from "./CodeBlock";
import { CheckCircle2, Box, Cpu } from "lucide-react";

export default function TopicJenkins() {
  const dockerInstall = `# Option 1: Run Jenkins in Docker (Recommended, no manual Java setup)
docker run -d -p 8080:8080 -p 50000:50000 --name jenkins -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts

# View initial unlock password
docker logs jenkins`;

  const javaInstall = `# Option 2: Run directly with Java (Requires Java 17 or 21)
# 1. Download jenkins.war from https://www.jenkins.io/download/
# 2. Run in terminal:
java -jar jenkins.war --httpPort=8080`;

  const windowsBatchStep = `:: Jenkins Build Step (Execute Windows batch command)
python -m venv venv
call venv\\Scripts\\activate
pip install pytest
pytest test_wallet.py -v`;

  const jenkinsfile = `// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'pip install pytest' // Use 'sh' on Mac/Linux
            }
        }

        stage('Run Automated Tests') {
            steps {
                bat 'pytest test_wallet.py -v'
            }
        }
    }

    post {
        always {
            echo "Test execution finished."
        }
        success {
            echo "All tests passed! Safe to deploy."
        }
        failure {
            echo "Tests failed! Build rejected."
        }
    }
}`;

  return (
    <div className="space-y-8">
      {/* Title & Introduction */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-pill bg-linen-mist px-3 py-1 text-xs font-semibold text-forest-ink mb-3">
          Topic 3
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-obsidian">
          Continuous Integration with Jenkins
        </h1>
        <p className="mt-3 text-base text-charcoal leading-relaxed max-w-2xl">
          Jenkins is an open-source automation server. Whenever you push code, Jenkins automatically
          triggers your PyTest and Selenium suites and blocks bad code from reaching production.
        </p>
      </div>

      {/* Installation Options */}
      <div>
        <h2 className="text-xl font-bold text-obsidian tracking-tight mb-2">
          1. Installing & Starting Jenkins
        </h2>
        <p className="text-xs text-slate mb-4">
          Choose whichever method fits your local development setup best:
        </p>

        <div className="space-y-4">
          <div className="rounded-card border border-pebble/30 bg-fog/30 p-4">
            <div className="flex items-center gap-2 font-bold text-forest-ink text-sm mb-1">
              <Box className="h-4 w-4 text-spruce" /> Option A: Docker (Fastest)
            </div>
            <p className="text-xs text-slate mb-2">
              If you have Docker installed, this starts Jenkins in one command with zero Java configuration.
            </p>
            <CodeBlock filename="terminal" language="bash" code={dockerInstall} />
          </div>

          <div className="rounded-card border border-pebble/30 bg-fog/30 p-4">
            <div className="flex items-center gap-2 font-bold text-forest-ink text-sm mb-1">
              <Cpu className="h-4 w-4 text-spruce" /> Option B: Standalone Java WAR / Windows
            </div>
            <p className="text-xs text-slate mb-2">
              Requires Java 17 or 21 installed. Download <code className="font-mono text-forest-ink">jenkins.war</code> and execute:
            </p>
            <CodeBlock filename="terminal" language="bash" code={javaInstall} />
          </div>
        </div>
      </div>

      {/* Step 2: Unlocking Jenkins */}
      <div>
        <h2 className="text-xl font-bold text-obsidian tracking-tight mb-2">
          2. Unlocking Jenkins
        </h2>
        <div className="rounded-card border border-pebble/30 bg-paper p-4 space-y-2 text-xs text-charcoal">
          <ol className="list-decimal list-inside space-y-1.5 text-xs text-charcoal leading-relaxed">
            <li>
              Open your browser and navigate to{" "}
              <code className="bg-fog px-1.5 py-0.5 rounded font-mono text-forest-ink font-semibold">
                http://localhost:8080
              </code>
            </li>
            <li>
              Copy the initial administrator password displayed in your terminal (or from{" "}
              <code className="bg-fog px-1.5 py-0.5 rounded font-mono text-slate">
                secrets/initialAdminPassword
              </code>
              ).
            </li>
            <li>Click <strong>&quot;Install suggested plugins&quot;</strong> and create an admin username.</li>
          </ol>
        </div>
      </div>

      {/* Step 3: Configuring the Test Job */}
      <div>
        <h2 className="text-xl font-bold text-obsidian tracking-tight mb-2">
          3. Creating a Test Job
        </h2>
        <p className="text-xs text-slate mb-2">
          You can run tests using a simple <strong>Freestyle Project</strong> or with a modern <strong>Jenkinsfile</strong>:
        </p>

        <div className="mt-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-forest-ink mb-1">
            Method A: Simple Freestyle Project
          </h3>
          <p className="text-xs text-slate mb-2">
            Click <em>New Item</em> &rarr; <em>Freestyle project</em> &rarr; Add build step <em>Execute Windows batch command</em> (or <em>Execute shell</em>):
          </p>
          <CodeBlock filename="Jenkins Build Step" language="bat" code={windowsBatchStep} />
        </div>

        <div className="mt-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-forest-ink mb-1">
            Method B: Pipeline with Jenkinsfile
          </h3>
          <p className="text-xs text-slate mb-2">
            Add this <code className="font-mono text-forest-ink">Jenkinsfile</code> directly to the root of your git repository:
          </p>
          <CodeBlock filename="Jenkinsfile" language="groovy" code={jenkinsfile} />
        </div>
      </div>

      {/* How Jenkins Reports Results */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-forest-ink mb-3">
          How to Read Jenkins Status
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-card border border-spruce/30 bg-linen-mist/50 p-3.5">
            <div className="flex items-center gap-2 font-bold text-forest-ink mb-1">
              <span className="h-3 w-3 rounded-full bg-[#163300]" /> Blue / Green Ball = SUCCESS
            </div>
            <p className="text-slate">
              Every pytest and selenium assertion evaluated to true. The build passes.
            </p>
          </div>
          <div className="rounded-card border border-alarm-red/30 bg-red-50 p-3.5">
            <div className="flex items-center gap-2 font-bold text-alarm-red mb-1">
              <span className="h-3 w-3 rounded-full bg-alarm-red" /> Red Ball = FAILURE
            </div>
            <p className="text-slate">
              One or more assertions failed or crashed with non-zero exit code. Jenkins warns developers immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Final Summary Card */}
      <div className="rounded-card border border-spruce/30 bg-linen-mist/60 p-4 flex items-start gap-3">
        <CheckCircle2 className="h-5 w-5 text-spruce shrink-0 mt-0.5" />
        <div className="text-xs text-forest-ink leading-relaxed">
          <strong className="block font-bold mb-1">Testing Pipeline Cycle:</strong>
          Write code &rarr; verify locally with <strong>PyTest</strong> &rarr; test end-to-end with <strong>Selenium</strong> &rarr; automate continuously with <strong>Jenkins</strong>.
        </div>
      </div>
    </div>
  );
}
