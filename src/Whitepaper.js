import aquaFoxel from './assets/CroppedAqua.jpg';
import fireFoxel from './assets/CroppedFirePheonix.jpg';
import darkFoxel from './assets/CroppedDark.jpg';
import './Whitepaper.css';

function Whitepaper() {
    return (
        <div className="Whitepaper">
            <img src={darkFoxel} className="dark-foxel" alt="Foxel3" />
            <h1>Whitepaper</h1>
            <div className="description">
                <p>Foxel Universe is a play to earn, collectible beast game. Modeled after Axie Infinity, anyone can earn tokens through decisive gameplay. Players can battle, collect, trade, and breed their foxels.</p>
            </div>
            <div className="vision">
                <h3>Team Vision</h3>
                <p>Team Vision
                    The primary goal of Foxel is to immerse players in a fun, competitive, rewarding environment that would be a natural entry point into the world changing benefits of blockchain technology.
                </p>
            </div>
            <div className="gameplay">
                <h2>Gameplay</h2>
                <p>Foxel is structured as an open-ended, collectible digital pet universe. The gameplay must be fun in order to attract enough participants to bring value to the network. As such, the Foxel team is foreseeing many iterations and the addition of new features as we structure the game in a way that exceeds the players expectations, thereby exposing more people into the value proposition of blockchain technology. </p>
                <div className="earning">
                    <h3>Earning Mechanics</h3>
                    <p>With this one primary goal in mind, each player will be given a “starting foxel”. This is to remove a large barrier to entry in which many play to earn games require players to pay upfront to begin playing or as a requirement for leveling up. Your ability to excel in the game and earn tokens will be solely based on your time spent in-game and the actions you choose while playing.
                    </p>
                </div>
                <div className="foxels">
                    <h3>Foxels</h3>
                    <p>Foxels (ERC-721) are the fox-like beasts you battle, breed, trade and collect. They will have different features that affect their appearance and overall usefulness. A starting foxel’s characteristics are not fully realized until they reach maturity which only happens after many in-game interactions which can be equated to a starting tutorial. This is done to disincentivize  anyone from creating multiple accounts to create new foxels. Foxels gain experience through in-game use in PvP battles. When a experience milestone is reached the player will have options as to which battle attribute will be boosted.</p>
                    <img src={aquaFoxel} className="aqua-foxel" alt="Foxel1" />
                    <div className="types">
                        <p><b>Types:</b></p>
                        <ul>
                            <li>Aqua</li>
                            <li>Fire</li>
                            <li>Ice</li>
                            <li>Plant</li>
                            <li>Storm</li>
                            <li>Flight</li>
                            <li>Dragon</li>
                            <li>Rock</li>
                            <li>Unknown</li>
                        </ul>
                    </div>
                    <div className="half-width">
                        <p><b>Battle Attributes:</b></p>
                        <ul>
                            <li>Attack</li><li>Defense</li><li>Vitality</li>
                        </ul>
                        <p><b>Non-visual Attributes:</b></p>
                        <ul>
                            <li>Generation</li>
                            <li>Sex</li>
                            <li>Age</li>
                        </ul>
                    </div>
                    <div className="half-width">
                        <p><b>Visual Attributes:</b></p>
                        <ul>
                            <li>Ear length</li>
                            <li>Ear type</li>
                            <li>Body type</li>
                            <li>Paw type</li>
                            <li>Tail quantity</li>
                            <li>Tail type</li>
                            <li>Eye type</li>
                            <li>Mouth type</li>
                        </ul>
                    </div>
                    <div className="breeding">
                        <h4>Breeding and Genetics</h4>
                        <p>Genetic makeup of offspring will be determined by the parents genetics. Nuances are to be determined.
                        </p>
                    </div>
                </div>
                <div className="token">
                    <h3>Token</h3>
                    <p>
                        The games token, FOXL (ERC-20), will be earned by various in-game player actions. The token will be used to level up, breed, and buy foxels. Though you will always be able to move your tokens out of the game to your own wallet, you will not be able to move tokens into the game from an exchange or wallet. This will be done to avoid the possibility of a well-financed player buying tokens outside of the game and then using them in-game to get ahead. This will guarantee that the only way a player can excel is by performing  in-game actions, creating a level playing field for all users.</p>
                    <p><b>Players can earn by:</b></p>
                    <ul>
                        <li>Competing in PvP battles.</li>
                        <li>Breeding foxels and selling them on the marketplace.</li>
                        <li>Collecting and speculating on rare foxels</li>
                    </ul>
                </div>
                <div className="funding">
                    <h3>Funding</h3>
                    <p>The Foxel team’s vision for funding game development is a presale of foxels that can later, after completion of the game, be imported into the game as playable creatures. Stay tuned and follow the <a href="https://twitter.com/FoxelUniverse">@FoxelUniverse</a> Twitter page so that you know when and where these can be acquired.</p>
                </div>
            </div>
            <img src={fireFoxel} className="fire-foxel" alt="Foxel2" />
        </div>
    );
}

export default Whitepaper;
