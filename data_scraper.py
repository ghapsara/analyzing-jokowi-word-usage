from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from datetime import datetime, timedelta
import time
import codecs
import json
import time
import csv
from collections import namedtuple

timeline_xpath = '//*[@id="stream-items-id"]/li/div[1]'
has_more_tweets_xpath = '//*[@id="timeline"]/div/div[2]/div[1]/div'
has_more_tweets_class = 'has-more-items'

total_tweets_xpath = '//*[@id="page-container"]/div[1]/div/div[2]/div/div/div[2]/div/div/ul/li[1]/a/span[3]'
total_tweets_attribute = 'data-count'

tweet_header_class = 'stream-item-header'
tweet_link_path = 'small/a'
tweet_link_attribute = 'href'
tweet_date_path = 'small/a/span[1]'
tweet_date_attribute = 'data-time'

tweet_message_class = 'js-tweet-text-container'

tweet_properties = ['link', 'datetime',
                    'message']
Tweet = namedtuple('Tweet', tweet_properties)

desired_limit_tweets = 10000

# driver = webdriver.Chrome(executable_path="./chromedriver")

# Chrome on docker
# docker run -d -P selenium/standalone-chrome

driver = webdriver.Remote(
    command_executor='http://127.0.0.1:32768/wd/hub',
    desired_capabilities=DesiredCapabilities.CHROME
)

def is_timeline_reached_end():
    try:
        class_element = driver.find_element_by_xpath(
            has_more_tweets_xpath).get_attribute('class')

        if has_more_tweets_class not in class_element:
            return True
        else:
            return False

    except:
        return False

def scroll_timeline(tweet_account):
    tweet_url = 'https://twitter.com/' + tweet_account
    driver.get(tweet_url)

    total_limit_tweets = int(driver.find_element_by_xpath(
        total_tweets_xpath).get_attribute(total_tweets_attribute))

    limit_tweets = desired_limit_tweets if total_limit_tweets >= desired_limit_tweets else total_limit_tweets
    
    tweets = []

    scrolling = True

    while scrolling:
        driver.execute_script(
            "window.scrollTo(0, document.body.scrollHeight);")

        timeline = driver.find_elements_by_xpath(timeline_xpath)
        total_tweets = len(timeline)

        print(total_tweets, end='\r')

        # sleep for 10 minutes 
        # time.sleep(600)
        
        if total_tweets >= limit_tweets:
            tweets = driver.find_elements_by_xpath(timeline_xpath)
            scrolling = False

        elif is_timeline_reached_end():
            tweets = driver.find_elements_by_xpath(timeline_xpath)            
            scrolling = False
    
        elif total_tweets <= limit_tweets:
            scrolling = True

    print("total tweets to scrape", len(tweets))

    return tweets


def get_data(tweet):
    #get header element
    tweet_header_element = tweet.find_element_by_class_name(tweet_header_class)
    #get link
    link = tweet_header_element.find_element_by_xpath(
        tweet_link_path).get_attribute(tweet_link_attribute)

    # get date
    tweet_timestamp = tweet_header_element.find_element_by_xpath(
        tweet_date_path).get_attribute(tweet_date_attribute)
    # convert to iso datetime
    tweet_date = datetime.fromtimestamp(int(tweet_timestamp))
    tweet_datetime = tweet_date.isoformat()

    # get message
    message = tweet.find_element_by_class_name(tweet_message_class).text

    return Tweet(link, tweet_datetime, message)


def write_to_json(data):
    print("writting json file")
    filename = "data/tweets.json"

    json_string = [t._asdict() for t in data]

    try:
        with codecs.open(filename, "w", encoding='utf-8') as outfile:
            data = json.dumps(json_string, indent=2, ensure_ascii=False)
            outfile.write(data)

        print("json is successfully written")
    except:
        print("failed to write")


def scrape_tweets(tweet_account):
    print("scrolling timeline")
    tweet_elements = scroll_timeline(tweet_account)

    print("extracting tweet data")
    tweet_list = []
    for i, t in enumerate(tweet_elements):

        print(tweet_account, i + 1, end='\r')

        tw = get_data(t)
        tweet_list.append(tw)

    print("\nscraping done")

    return tweet_list


def scrape_gov_tweets():
    account = 'jokowi'
    tweets = scrape_tweets(account)
    write_to_json(tweets)

try:
    scrape_gov_tweets()
except:
    driver.quit()
