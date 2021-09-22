# ROLL NO : 1901037
# NAME : ANSHUMAN

import boto3

client=boto3.client('rds')

response = client.create_db_instance(
    DBName="customerFeedbackDB02",
    DBInstanceClass='db.t2.micro',
    DBInstanceIdentifier='dbinstance02',
    Engine='MySQL',
    MasterUserPassword='mynameisanshuman',
    MasterUsername='root',
    VpcSecurityGroupIds=[
        'sg-0a399994eba38e6d8',
    ],
    PubliclyAccessible=True,
    AllocatedStorage=5,
)

print(response)