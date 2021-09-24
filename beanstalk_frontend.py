# ROLL NO : 1901037
# NAME : ANSHUMAN

import boto3
import time

client = boto3.client("elasticbeanstalk")

def create_version():
    response = client.create_application_version(
        ApplicationName="my-app-23",
        AutoCreateApplication=True,
        Description="my-app-v4",
        Process=True,
        SourceBundle={
        'S3Bucket': 'newhtmlform',
        'S3Key': 'frontend.zip',
        },
        VersionLabel="v7",
    )
    print(response)


def create_environment():

    response = client.create_environment(
        ApplicationName="my-app-23",
        EnvironmentName="my-env-23",
        PlatformArn="arn:aws:elasticbeanstalk:us-east-1::platform/Node.js 14 running on 64bit Amazon Linux 2/5.4.5",
        VersionLabel="v7",
        OptionSettings=[
            {
                "Namespace": "aws:autoscaling:launchconfiguration",
                "OptionName": "IamInstanceProfile",
                "Value": "EMR_EC2_DefaultRole",
            },
            {
                "Namespace": "aws:autoscaling:launchconfiguration",
                "OptionName": "EC2KeyName",
                "Value": "CS351-CG31-KP",
            },
            {"Namespace": "aws:autoscaling:asg", "OptionName": "MaxSize", "Value": "2"},
        ],
    )

    print(response)


if __name__ == "__main__":
    create_version()
    time.sleep(5)
    create_environment()