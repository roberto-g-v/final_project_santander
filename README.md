# Final Project Santander

## Santander Customer Transaction Prediction Dataset
At Santander, the mission is to help people and businesses prosper. We are always looking for ways to help our customers understand their financial health and identify which products and services might help them achieve their monetary goals.

Santander science team is continually challenging our machine learning algorithms, working with the global data science community to make sure we can more accurately identify new ways to solve our most common challenge, binary classification problems such as: is a customer satisfied? Will a customer buy this product? Can a customer pay this loan?

## The Challenge
Identify which customers will make a specific transaction in the future, irrespective of the amount of money transacted.

## Conclusions
Dataset
- 2 outputs
    0 = No transaction
    1 = Transaction

- 200 variables

## Data preprocessing
Dataset is un balance

- 89.95% corresponds to target "0" and 10.04% corresponds to target "1".
- We decided to downsampling target "0" data to better train our model, leaving the dataset as follow: 33.33% for target "0" and 66.66% for target "1".

Variables does show very low correlation among them, meaning that variables are independent. Variables while plotting them in box plots show outliers that mainly are coming from target "1" data.

Variables were passed through a Standard Scaler before fitting them into the model.

## Model
We chose to run a neuronal network with the following structure:

Model: "sequential"
