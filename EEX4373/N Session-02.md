# Exploratory Data Analysis
Exploratory Data Analysis (EDA) refers to the process of <mark style="background: #FFF3A3A6;">visually and statistically examining a dataset</mark> to <mark style="background: #ABF7F7A6;">uncover patterns, relationships, anomalies, and other insights.</mark>

## Uses
- **Understanding**: 
	- Helps in *getting acquainted with the dataset, understanding its size, shape, and basic characteristics.*
- **Cleaning and Preprocessing**: 
	- To *identify missing values, outliers, and inconsistencies* in the data.
- **Identifying Patterns and Trends**: 
	- Helps *reveal patterns, trends, and relationships among variables.*
- **Feature Selection**: 
	- Helps *identify relevant features (variables) for building predictive models.*
- **Outlier Detection**: 
	- Can *identify outliers, which are data points that significantly deviate from the overall pattern.*
- **Model Assumptions:**
	- Helps *validate assumptions made by various analytical methods.*
- **Variable Relationships**: 
	- Aids in understanding the relationships between variables.

## Steps in EDA

EDA involves a series of steps to understand the main characteristics, patterns, and relationships within a dataset.

- **Identify the question**
- **Data Collection and Familiarization**
- **Data Cleaning and Preprocessing**
- **Summary Statistics**
- **Data Visualization**
- **Variable Relationships**
- **Feature Engineering**
- **Univariate Analysis**
- **Bivariate and Multivariate Analysis**
- **Hypothesis Generation**
- **Iterative Exploration**

## Classification of EDA
1. **Descriptive Statistics:**
    - Summary statistics: Mean, median, mode, standard deviation, etc.
    - Measures of distribution: Histograms, quantiles, range, etc.
2. **Data Visualization:**
    - Univariate visualization: Histograms, box plots, bar charts.
    - Bivariate visualization: Scatter plots, line plots, heatmaps.
    - Multivariate visualization: Pair plots, correlation matrices, parallel coordinates.
3. **Central Tendency and Dispersion Analysis:**
	- Mean, median, mode, range: Understanding the center and spread of data.
	- Variance, standard deviation: Measuring data variability.
4. **Data Distribution Exploration:**
    - Skewness and kurtosis analysis: Identifying deviations from normal distribution.
    - Probability density functions: Visualizing distribution shapes.
5. **Outlier Detection and Treatment:**
    - Box plots: Identifying outliers using quartiles and interquartile range.
    - Z-scores and modified Z-scores: Quantifying outlier significance.
6. **Correlation and Relationship Analysis:**
    - Correlation coefficients: Pearson, Spearman, Kendall correlations.
    - Correlation matrices: Identifying relationships between multiple variables.
7. **Categorical Data Analysis:**
    - Frequency tables: Summarizing categorical data counts.
    - Bar charts and pie charts: Visualizing categorical distribution.
8. **Time Series Analysis:**
    - Time plots: Visualizing data changes over time.
    - Seasonal decomposition: Separating trends, seasonality, and residuals.
9. **Pattern Recognition and Anomaly Detection:**
    - Clustering: Grouping similar data points together.
    - Anomaly detection techniques: Identifying unusual observations.
10. **Dimensionality Reduction:**
    - Principal Component Analysis (PCA): Reducing data dimension while retaining key information.
    - t-SNE (t-Distributed Stochastic Neighbor Embedding): Visualizing high-dimensional data in lower dimensions.
11. **Feature Engineering:**
    - Creating new features based on existing ones to reveal hidden patterns.
    - Transformations: Logarithmic, exponential, scaling.


>[!info]
>Confirmatory Data Analysis (CDA) is a statistical and analytical approach that involves testing predefined hypotheses using collected data.

# Data
Any collection of information, facts, or statistics that can be recorded, measured, or represented in a structured form. 

> It can be raw and unprocessed, or it can be organized and processed to extract meaningful insights.

## Categories of Data
Data can be categorized into various types based on their nature, characteristics, and the way they are represented.

1. **Numerical Data:**
    - **Continuous Data**: Represents measurable quantities that can take any value within a certain range. Examples include height, weight, temperature.
    - **Discrete Data**: Represents distinct, separate values. Examples include the number of people in a room, the count of items sold.
2. **Categorical Data:**
    - **Nominal Data**: Represents categories without any inherent order. Examples include colors, gender, types of fruits.
    - **Ordinal Data**: Represents categories with a meaningful order or ranking. Examples include education levels (e.g., high school, bachelor's, master's).

# Measurement
Measurement refers to the process of assigning a numerical value to a particular attribute or characteristic of an object, event, phenomenon, or individual.

> The goal of measurement is to quantify or represent the property being measured in a standardized and systematic manner.

Measurement in general has two distinct parts:

**The True Score:**
- The "True Score" refers to the actual, accurate, and objective value of the attribute or characteristic you are trying to measure.
**Error:**
- "Error" in this context refers to the discrepancy or deviation between the true score and the measured value.

# Population and Sample

## Population
The population refers to the entire group of individuals, objects, or items that possess a certain characteristic or feature of interest in a particular study.

## Sample
A sample is a subset or smaller representative group taken from the larger population.

# Descriptive statistics

This is a branch of statistics that involves organizing, summarizing, and presenting data in a meaningful and informative way.

Descriptive statistics includes various measures and techniques, such as:

1. **Measures of Central Tendency**: These include the mean (average), median (middle value), and mode (most frequent value) of a dataset.
2. **Measures of Dispersion**: These measures, such as the range, variance, and standard deviation, describe how spread out the data points are from the center. 
3. **Frequency Distributions**: These involve creating tables or graphs that show the frequency or count of each distinct value or range of values in a dataset. 
4. **Percentiles and Quartiles**: These divide the data into percentiles (such as the median, which is the 50th percentile) or quartiles (which divide the data into four equal parts).
5. **Skewness and Kurtosis**: Skewness measures the asymmetry of the data distribution, while kurtosis measures the peakedness or flatness of the distribution.
6. **Graphical Representations**: Visual tools like scatter plots, bar charts, pie charts, and box plots help illustrate the distribution and patterns in the data.
7. **Measures of Relationships**: Correlation coefficients indicate the strength and direction of linear relationships between pairs of variables.

# Variable
Variable is a characteristic, attribute, or quantity that can take on different values.

1. **Categorical Variables**: Also known as qualitative variables, these represent categories or groups that do not have a natural numerical ordering.
2. **Ordinal Variables**: These variables have categories with a natural order, but the differences between categories might not be consistent or meaningful. 
3. **Numerical Variables** (Quantitative Variables): These variables represent quantities that can be measured and have meaningful numerical values. They can be further classified into:
    - **Discrete Variables**: These variables can only take on specific, distinct values within a certain range. 
    - **Continuous Variables**: These variables can take on any value within a certain range, often involving measurement. 

## Variable Summaries
Variable summaries involve summarizing the main characteristics and key aspects of a dataset's individual variables.

1. **Central Tendency**: This includes measures that indicate the center of the data distribution:
    - **Mean**: The average value of the variable.
    - **Median**: The middle value when the data is sorted. It's less sensitive to outliers compared to the mean.
    - **Mode**: The most frequently occurring value.
2. **Spread and Dispersion**: These measures describe how the data is spread out:
    - **Range**: The difference between the maximum and minimum values.
    - **Variance**: A measure of the average squared difference between each data point and the mean.
    - **Standard Deviation**: The square root of the variance, indicating the average deviation from the mean.
3. **Quantiles and Percentiles**: These provide insights into the distribution and help identify potential outliers:
    - **Quartiles**: Values that divide the data into four equal parts (25th, 50th, and 75th percentiles).
    - **Percentiles**: Values that divide the data into hundred equal parts (e.g., 90th percentile).
4. **Skewness and Kurtosis**: These indicate the shape of the distribution:
    - **Skewness**: Measures the asymmetry of the distribution.
    - **Kurtosis**: Measures the peakedness or flatness of the distribution compared to a normal distribution.
5. **Visualizations**: Histograms, box plots, density plots, and other graphical representations provide visual insights into the distribution of the variable.
6. **Potential Outliers**: Identification of extreme values that might indicate data anomalies or errors.

# Data Visualization
Data visualization refers to the representation of data and information through visual elements such as charts, graphs, maps, and other graphical formats.

1. **Univariate Visualization**: Univariate visualization involves examining a single variable in isolation. The goal is to understand the distribution, central tendency, variability, and patterns within that variable. Common types of univariate visualizations include:
    
    - **Histograms**: Display the frequency distribution of a single numerical variable by dividing it into bins and showing the frequency of observations in each bin.
    - **Bar Charts**: Used for categorical variables to show the frequency or proportion of each category.
    - **Box Plots**: Display the summary statistics (minimum, maximum, quartiles) of a numerical variable and help identify outliers.
    - **Density Plots**: Similar to histograms, these show the distribution of a variable as a smoothed curve.
    - **Probability Plots**: Compare the distribution of data to a theoretical distribution to assess its fit.
      
2. **Bivariate Visualization**: Bivariate visualization involves analyzing the relationship between two variables. The focus is on understanding how changes in one variable are related to changes in another. Common types of bivariate visualizations include:
    
    - **Scatter Plots**: Plot two numerical variables on a graph to visualize their relationship and identify patterns, trends, or correlations.
    - **Line Charts**: Useful for showing how two variables change over time or another continuous dimension.
    - **Bar Charts and Heatmaps**: Used to compare categories or values across two variables.
    - **Correlation Heatmaps**: Display the correlation coefficients between pairs of numerical variables.
      
3. **Multivariate Visualization**: Multivariate visualization involves the analysis of relationships among three or more variables simultaneously. Common types of multivariate visualizations include:
    
    - **Scatterplot Matrices**: Show scatter plots for multiple pairs of variables in a grid layout.
    - **Parallel Coordinates**: Display multiple numerical variables using parallel lines, showing how they relate to each other.
    - **Bubble Charts**: Extend scatter plots to three dimensions by introducing the size of the markers as a third variable.
    - **3D Scatter Plots**: Represent relationships between three numerical variables in a 3D space.

## Univariate Visualization
### Histogram
A histogram is a graphical representation of the distribution of a single numerical variable. It provides insights into the frequency or count of observations falling within different intervals or "bins" of the variable's range. Histograms are particularly useful for understanding the shape, central tendency, variability, and potential outliers in a dataset.

Here's how a histogram is typically constructed:

1. **Data Binning**: The range of the numerical variable is divided into several non-overlapping intervals or bins. These bins should be chosen carefully to effectively represent the data distribution without obscuring important details.
    
2. **Frequency Count**: The number of observations falling into each bin is counted. This count represents the frequency of observations within that bin.
    
3. **Vertical Bars**: The bins are represented along the horizontal axis, and the frequency counts are represented along the vertical axis. Vertical bars or columns are drawn above each bin, with the height of each bar corresponding to the frequency count of observations in that bin.
    
4. **Bar Width**: The width of the bars is determined by the width of the bins. The bars typically touch each other to visually represent the continuity of the variable's values.
    
5. **Visualization of Distribution**: The resulting histogram displays the distribution of the numerical variable's data, showing the concentration of data points in different ranges. It can reveal characteristics such as symmetry, skewness, multimodality (multiple peaks), and the presence of outliers.

Key features of a histogram include:

- **Shape**: The overall shape of the histogram can resemble various patterns, such as bell-shaped (normal distribution), skewed (asymmetric), or uniform.
- **Central Tendency**: The central tendency of the data, including the mode (peak) of the distribution, can be identified.
- **Spread and Dispersion**: The spread of data across the range of values is depicted, and the variability can be observed.
- **Outliers**: Extreme values that are significantly different from the rest of the data might appear as isolated bars or regions outside the main distribution.

### Box Plots
A box plot, also known as a box-and-whisker plot, is a graphical representation that displays the summary statistics and distribution of a numerical dataset. It provides a visual summary of the minimum, first quartile (Q1), median (second quartile or Q2), third quartile (Q3), and maximum values of the data, along with information about potential outliers.

Here's how a box plot is typically constructed:

1. **Minimum and Maximum**: A line is drawn from the minimum value to the maximum value of the dataset, forming the "whiskers" of the plot.
    
2. **Interquartile Range (IQR)**: The range between the first quartile (Q1) and the third quartile (Q3) is calculated. This range, IQR = Q3 - Q1, represents the middle 50% of the data.
    
3. **Median Line**: A vertical line or a box is drawn at the median (Q2) of the data. The median is the value that divides the data into two halves, with half of the observations falling below it and half above it.
    
4. **Box**: A box is drawn between Q1 and Q3, enclosing the IQR. This box visually represents the spread of the middle 50% of the data.
    
5. **Whiskers**: The whiskers extend from the box to the minimum and maximum values within a defined range (often 1.5 times the IQR). Observations beyond this range are considered potential outliers and are displayed as individual data points.
    
6. **Outliers**: Individual data points that fall outside the whiskers are typically marked as points or dots on the plot, representing potential outliers.
    
Box plots provide several insights into the data:

- **Central Tendency**: The median is a measure of central tendency, indicating where the middle value lies.
- **Spread and Variability**: The IQR provides information about the spread or dispersion of the middle 50% of the data.
- **Skewness**: The length of the whiskers and the positioning of the median within the box can suggest the skewness of the distribution.
- **Outliers**: Outliers are easily identifiable as points outside the whiskers.

### Transparent plotting

Transparent plotting, also known as alpha blending or opacity, is a visualization technique used in data plotting and graphing to represent overlapping data points or multiple layers of information. 

## Bivariate Visualization
### Stacked Bar  Chart
A stacked bar chart is a type of data visualization that <mark style="background: #FFF3A3A6;">presents categorical data using horizontal or vertical bars.</mark> In a stacked bar chart, the bars are divided into segments or "stacks," each representing a different subcategory or component of the data. The total height (or width) of each bar represents the cumulative value of the subcategories it comprises.

Here's how a stacked bar chart is typically constructed:

1. **Axis and Bars**: The categorical variable (e.g., different time periods, regions, products) is represented on one axis (usually the horizontal axis) while the values are represented on the other axis (usually the vertical axis).
    
2. **Stacks**: Each bar is divided into segments or stacks, where each stack represents a subcategory. Each subcategory's value is shown as the height (or width) of its corresponding stack.
    
3. **Colors**: Different colors are often used to differentiate the subcategories within each bar. The color segments help viewers identify which part of the bar corresponds to which subcategory.
    
4. **Total Bar Height**: The cumulative height (or width) of the stacks in a bar represents the total value for the category being visualized. This makes it easy to compare the relative sizes of the categories as well as the proportions of the subcategories.

## Multivariate Visualization
### Pairwise Scatterplots
Often referred to as a scatterplot matrix or pair plot, are a form of data visualization that allows you to examine the relationships between multiple pairs of numerical variables in a single display.


# Statistical Distributions
Statistical distributions, also known as probability distributions, describe the possible outcomes and their associated probabilities for a given random variable.

Here are some common types of statistical distributions:

1. **Normal Distribution (Gaussian Distribution)**: The normal distribution is one of the most well-known distributions and is characterized by its bell-shaped curve. Many natural processes tend to follow a normal distribution, with data clustering around the mean and symmetrical tails. Parameters include the mean (μ) and the standard deviation (σ).
    
2. **Uniform Distribution**: The uniform distribution has a constant probability for all values within a specified range. It's often used when all outcomes are equally likely.
    
3. **Exponential Distribution**: The exponential distribution describes the time between events in a process where events occur continuously and independently at a constant average rate. It's often used in survival analysis and queuing theory.
    
4. **Poisson Distribution**: The Poisson distribution models the number of events that occur in a fixed interval of time or space, given a known average rate. It's commonly used for rare events or counting occurrences.
    
5. **Binomial Distribution**: The binomial distribution models the number of successes in a fixed number of independent Bernoulli trials (experiments with two possible outcomes). It's used for situations like coin flips or success/failure experiments.
    
6. **Geometric Distribution**: The geometric distribution models the number of trials needed for the first success in a sequence of independent Bernoulli trials.
    
7. **Gamma Distribution**: The gamma distribution is a versatile distribution that extends the exponential and chi-squared distributions. It's often used to model waiting times or survival times.
    
8. **Beta Distribution**: The beta distribution is commonly used to model continuous random variables that are bounded within a specific range. It's often used in Bayesian statistics.
    
9. **Log-Normal Distribution**: The log-normal distribution is used for variables that are the result of exponential growth, where the logarithm of the variable follows a normal distribution.

# Standard Deviation
The standard deviation is a measure of the amount of variation or dispersion in a set of data points. It quantifies how spread out the values in a dataset are around the mean (average) value.

$$
\sigma = \sqrt{\frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2}
$$

The standard deviation has several important properties:

1. **Dispersion**: A <mark style="background: #FFF3A3A6;">higher standard deviation indicates greater variability or dispersion</mark> in the data points, while a lower standard deviation indicates less variability and more clustering around the mean.
    
2. **Normal Distribution**: In a normal distribution, about 68% of the data falls within one standard deviation of the mean, approximately 95% falls within two standard deviations, and around 99.7% falls within three standard deviations.
    
3. **Outliers**: Extremely high or low values (outliers) can significantly impact the standard deviation, making it sensitive to extreme observations.
    
4. **Comparing Data Sets**: Standard deviation is commonly used to compare the spread of data between different datasets or groups.
    
5. **Variability**: A small standard deviation suggests that the data values are close to the mean, while a large standard deviation suggests greater variability and larger differences from the mean.
## Standardized Scores
Also known as z-scores, are a way to measure how many standard deviations a data point is away from the mean of a dataset.
$$
z = \frac{x - \mu}{\sigma}

$$
Interpreting standardized scores:

1. **Centering**: If $Z$=0, it means the data point is exactly at the mean of the distribution.
2. **Direction**: Positive z-scores indicate that the data point is above the mean, while negative z-scores indicate that it is below the mean.
3. **Magnitude**: The magnitude of the z-score indicates how many standard deviations the data point is away from the mean. A z-score of 1 means the data point is 1 standard deviation away from the mean; a z-score of 2 means it's 2 standard deviations away, and so on.

Key uses of standardized scores:

- **Comparison**: Z-scores allow you to compare data points from different distributions or variables on a common scale, regardless of their original units.
- **Outliers**: Z-scores can help identify outliers as data points with z-scores significantly higher or lower than the mean.
- **Normal Distribution**: In a normal distribution, you can interpret z-scores as percentiles. For example, a z-score of 1 corresponds roughly to the 84th percentile.

## Standardized Normal Distribution
The standardized normal distribution, also known as the standard normal distribution or the Z-distribution, is a specific type of normal distribution with a mean (μ) of 0 and a standard deviation (σ) of 1.
$$
f(z) = \frac{1}{\sqrt{2\pi}} \cdot e^{-\frac{z^2}{2}}
$$
