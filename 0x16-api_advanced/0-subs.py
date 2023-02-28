#!/usr/bin/python3
""" Queries the Reddit API """
import requests


def number_of_subscribers(subreddit):
    """ Returns the number of subscribers for a given subreddit.
        If an invalid subreddit is given, return 0.
    """
      url = f"https://www.reddit.com/r/{subreddit}/about.json"
    headers = {"User-Agent": "Custom User Agent"}

    response = requests.get(url, headers=headers, allow_redirects=False)

    if response.status_code == 200:
        data = response.json()
        return data["data"]["subscribers"]
    else:
        return 0
