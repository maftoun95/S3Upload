This is a simple UI for interacting with an AWS S3 bucket.

The markup is set to receive data from the aws-sdk. Once the desired data
has been returned, we will use a for each loop to build out our table. Each
loop will clone the table row with class 'original' and use our s3 data to
populate the clone's children td's with the correct values.
