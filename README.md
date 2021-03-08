# Final Project Santander

## Background Santander Analytics
Our mission is to help Banco Santander identify from 200000 internal custormers, who will make a transaction based on 200 variables from past behavioral decision. We found that a Neuronal Network Machine learning was the best model in this case in order to make an app that solves their most common challenge on classification of variables such as: is a customer satisfied? Will a customer buy this product? Can a customer pay this loan? We will try to surpass the current results comparig different models precision and accuracy. With this app Santander will know in advance which products and services might a certain customer want and  help them achieve their monetary goals.

## Dataset
We found a Dataset from Santander that invites Kaggler´s to participate on a competition to identify which customers will make a transaction. The dataset contains a train.csv and a test.csv which are anonymized for privacy affairs. You can find the dataset on the next link:
https://www.kaggle.com/c/santander-customer-transaction-prediction

## The Challenge
We will solve a binary classification problem:
INPUT: Will the customer will make a transaction?
OUTPUT: Yes/No
This binary problem solves questions like: is the customer satisfied? Will a customer buy this product? Can a customer pay this loan?
With our Machine Learnig Algorythm - Neuronal Network we will Identify which customers will make a specific transaction in the future, irrespective of the amount of money transacted or not.

## Model
We chose to run a neuronal network with the following structure:

Model: "sequential"

## Data preprocessing
1. Variables does show very low correlation among them, meaning that variables are independent. Variables while plotting them in box plots show outliers that mainly are coming from target "1" data.
2. Variables were passed through a Standard Scaler before fitting them into the model.
3. Tune and balance the dataset.

## Conclusions
Dataset
- 2 outputs
    - 0 = No transaction
    - 1 = Transaction

- 200 variables
- 200000 customers

## Neuronal Network Results
- Our machine learning automatically indentified that:
    - 89.95% of customers corresponds to target "0" NO TRASANCTION
    - 10.04% of customers corresponds to target "1" TRANSANCTION
- We decided to down sampling target "0" data to better train our model, leaving the dataset as follow: 33.33% for target "0" and 66.66% for target "1".

Per the results of the correlation analysis, we can conclude that variables show very poor correlation, meaning that the variables are indepent to each other. Therefore, we should not ignore direclty any variable or drop it in feature selection preocess.

### Highest correlated variables:
<br>
:-----:|:-----:
**Variable**|**Correlation**
     
  var_81   |   0.080917
  var_139  |   0.074080
  var_12   |   0.069489
  var_6    |   0.066731
  var_110  |   0.064275
<br>

