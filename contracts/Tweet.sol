// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Tweet {
    address public owner;
    // represent ID of a tweet
    uint256 private counter;

    constructor() {
        owner = msg.sender;
        counter = 0;
    }

    struct tweet {
        address tweeter;
        uint256 id;
        string tweetText;
        string tweetImg;
        bool isDeleted;
        uint256 timestamp;
    }

    struct user {
        string name;
        string bio;
        string profileImg;
        string profileBanner;
    }

    // id to tweet struct
    mapping(uint256 => tweet) Tweets;
    // address to a user struct
    mapping(address => user) Users;

    event tweetCreated(
        address tweeter,
        uint256 id,
        string tweetText,
        string tweetImg,
        bool isDeleted,
        uint256 timestamp
    );

    event tweetDeleted(uint256 id, bool isDeleted);

    function addTweet(string memory tweetText, string memory tweetImg)
        public
        payable
    {
        require(msg.value == (0.01 ether), "Please submit 0.01 MATIC");
        tweet storage newTweet = Tweets[counter];
        newTweet.tweetText = tweetText;
        newTweet.tweetImg = tweetImg;
        newTweet.tweeter = msg.sender;
        newTweet.id = counter;
        newTweet.isDeleted = false;
        newTweet.timestamp = block.timestamp;
        emit tweetCreated(
            msg.sender,
            counter,
            tweetText,
            tweetImg,
            false,
            block.timestamp
        );
        counter++;
        payable(owner).transfer(msg.value);
    }

    // Methods for fetching all tweet
    function getAllTweets() public view returns (tweet[] memory) {
        tweet[] memory temporary = new tweet[](counter); // counter means length of list
        uint countTweets = 0;

        for (uint i = 0; i < counter; i++) {
            if (Tweets[i].isDeleted == false) {
                temporary[countTweets] = Tweets[i];
                countTweets++;
            }
        }

        tweet[] memory result = new tweet[](countTweets);
        for (uint i = 0; i < countTweets; i++) {
            result[i] = temporary[i];
        }

        return result;
    }

    // Methods for fetching your all tweet
    function getMyTweets() external view returns (tweet[] memory) {
        tweet[] memory temporary = new tweet[](counter);
        uint countMyTweets = 0;

        for (uint i = 0; i < counter; i++) {
            if (
                Tweets[i].tweeter == msg.sender && Tweets[i].isDeleted == false
            ) {
                temporary[countMyTweets] = Tweets[i];
                countMyTweets++;
            }
        }

        tweet[] memory result = new tweet[](countMyTweets);
        for (uint i = 0; i < countMyTweets; i++) {
            result[i] = temporary[i];
        }

        return result;
    }

    // Methods for fetching your particular tweet
    function getParticularTweet(uint256 id)
        public
        view
        returns (
            string memory,
            string memory,
            address
        )
    {
        require(id < counter, "No such a Tweet");
        tweet storage t = Tweets[id];
        require(t.isDeleted == false, "Tweet is deleted");
        return (t.tweetText, t.tweetImg, t.tweeter);
    }

    // Methods to delete a tweet
    function deleteTweet(uint tweetId, bool isDeleted) external {
        require(
            Tweets[tweetId].tweeter == msg.sender,
            "You can only delete your own tweet"
        );
        Tweets[tweetId].isDeleted = isDeleted;
        emit tweetDeleted(tweetId, isDeleted);
    }

    // Methods to update user profile
    function updateUser(
        string memory newName,
        string memory newBio,
        string memory newProfileImg,
        string memory newProfileBanner
    ) public {
        user storage userData = Users[msg.sender];
        userData.name = newName;
        userData.bio = newBio;
        userData.profileImg = newProfileImg;
        userData.profileBanner = newProfileBanner;
    }

    // Methods to get user profile
    function getParticularUser(address userAddress)
        public
        view
        returns (user memory)
    {
        return Users[userAddress];
    }
}
