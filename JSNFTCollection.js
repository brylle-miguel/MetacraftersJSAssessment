// this is where I declared the variable to hold my NFTs
const NFTs = []

// this function takes in some values as parameters, in which I
// named the objects' values as name, age, occupation, and faveFruit 
// which will be stored in my variable above.
function mintNFT (_name, _age, _occupation, _faveFruit) {
    const NFT = {
        "name": _name,
        "age": _age,
        "occupation": _occupation,
        "faveFruit": _faveFruit
    }
    NFTs.push(NFT)
}

// in here, I followed the requirements to create a loop that will
// go through an "array" of NFT's and print their metadata using 
// the "console.log()" function
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nID number: \t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Age: \t\t" + NFTs[i].age);
        console.log("Occupation: " + NFTs[i].occupation);
        console.log("FaveFruit: \t" + NFTs[i].faveFruit);
    }
}

// in this block, it prints out the total number of values inside
// my variable which is shown above
function getTotalSupply() {
    console.log("\nTotal Number of NFT:  " + NFTs.length);
}

// and then on this last block, I used the minting function to pass
// the specific values into the variables
mintNFT("Brylle", "24", "Student", "Peach");
mintNFT("Jane", "24", "Student", "Mango");
mintNFT("Aerith", "9", "Student", "Banana");
mintNFT("Ethan", "6", "Student", "Watermelon");
listNFTs();
getTotalSupply();
