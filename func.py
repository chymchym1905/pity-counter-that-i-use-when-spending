import boto3
import json

s3 = boto3.client('s3','us-west-2')
def lambda_handler(event, context):
    print(event)
    value = json.loads(event["body"])["value"]
    s3.put_object(Key="pity.txt",Body=value,Bucket="pity-counter")
    return {
        'statusCode': 200,
        'body': 'value'
    }