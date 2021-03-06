import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = 
      [ {"type": "success", "value": [ "explicit", "nerdy" ] }];
 
    const jokes = [
      { "type": "success", "value": [
        { "id": 1, "joke": "Avi Was here uses ribbed condoms inside out, so he gets the pleasure.", "categories": ["explicit"] },
        { "id": 2, "joke": "MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.", "categories": [] },
        { "id": 3, "joke": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.", "categories": [] },
        { "id": 4, "joke": "If you ask Chuck Norris what time it is, he always answers &quot;Two seconds till&quot;. After you ask &quot;Two seconds to what?&quot;, he roundhouse kicks you in the face.", "categories": [] },
        { "id": 5, "joke": "Chuck Norris lost his virginity before his dad did.", "categories": ["explicit"] }, { "id": 6, "joke": "Since 1940, the year Chuck Norris was born, roundhouse kick related deaths have increased 13,000 percent.", "categories": [] },
        { "id": 12, "joke": "Chuck Norris sheds his skin twice a year.", "categories": [] },
        { "id": 13, "joke": "Chuck Norris once challenged Lance Armstrong in a &quot;Who has more testicles?&quot; contest. Chuck Norris won by 5.", "categories": ["explicit"] },
        { "id": 14, "joke": "There are no steroids in baseball. Just players Chuck Norris has breathed on.", "categories": [] },
        { "id": 15, "joke": "When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.", "categories": [] },
        { "id": 16, "joke": "Pluto is actually an orbiting group of British soldiers from the American Revolution who entered space after the Chuck gave them a roundhouse kick to the face.", "categories": [] },
        { "id": 17, "joke": "Chuck Norris does not teabag the ladies. He potato-sacks them.", "categories": ["explicit"] },
        { "id": 18, "joke": "According to the Encyclopedia Brittanica, the Native American &quot;Trail of Tears&quot; has been redefined as anywhere that Chuck Norris walks.", "categories": [] },
        { "id": 19, "joke": "In an average living room there are 1,242 objects Chuck Norris could use to kill you, including the room itself.", "categories": [] },
        { "id": 20, "joke": "The Chuck Norris military unit was not used in the game Civilization 4, because a single Chuck Norris could defeat the entire combined nations of the world in one turn.", "categories": ["nerdy"] },
        { "id": 21, "joke": "Chuck Norris doesn't shower, he only takes blood baths.", "categories": [] }, { "id": 23, "joke": "Time waits for no man. Unless that man is Chuck Norris.", "categories": [] },
        { "id": 24, "joke": "Chuck Norris can hit you so hard that he can actually alter your DNA. Decades from now your descendants will occasionally clutch their heads and yell &quot;What The Hell was That?&quot;.", "categories": [] },
        { "id": 25, "joke": "In the Bible, Jesus turned water into wine. But then Chuck Norris turned that wine into beer.", "categories": [] },
        { "id": 26, "joke": "Chuck Norris is the only human being to display the Heisenberg uncertainty principle - you can never know both exactly where and how quickly he will roundhouse-kick you in the face.", "categories": ["nerdy"] },
        { "id": 27, "joke": "Faster than a speeding bullet... More powerful than a locomotive... Able to leap tall buildings in a single bound... These are some of Chuck Norris's warm-up exercises.", "categories": [] },
        { "id": 28, "joke": "Chuck Norris is not hung like a horse. Horses are hung like Chuck Norris.", "categories": [] },
        { "id": 29, "joke": "Teenage Mutant Ninja Turtles is based on a true story: Chuck Norris once swallowed a turtle whole, and when he crapped it out, the turtle was six feet tall and had learned karate.", "categories": [] },
        { "id": 30, "joke": "Someone once tried to tell Chuck Norris that roundhouse kicks aren't the best way to kick someone. This has been recorded by historians as the worst mistake anyone has ever made.", "categories": [] },
        { "id": 31, "joke": "Chuck Norris has two speeds: Walk and Kill.", "categories": [] },
        { "id": 33, "joke": "Chuck Norris once shot down a German fighter plane with his finger. By yelling &quot;Bang!&quot;", "categories": [] },
        { "id": 34, "joke": "The opening scene of the movie &quot;Saving Private Ryan&quot; is loosely based on games of dodgeball Chuck Norris played in second grade.", "categories": [] },
        { "id": 35, "joke": "Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse kick you in the face.", "categories": [] },
        { "id": 36, "joke": "Chuck Norris originally appeared in the &quot;Street Fighter II&quot; video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked about this glitch, Norris replied &quot;That's no glitch.&quot;", "categories": ["nerdy"] },
        { "id": 37, "joke": "If you spell Chuck Norris in Scrabble, you win. Forever.", "categories": [] },
        { "id": 38, "joke": "Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Masacre.", "categories": [] },
        { "id": 39, "joke": "Chuck Norris will attain statehood in 2009. His state flower will be the Magnolia.", "categories": [] },
        { "id": 40, "joke": "A handicapped parking sign does not signify that this spot is for handicapped people. It is actually in fact a warning, that the spot belongs to Chuck Norris and that you will be handicapped if you park there.", "categories": [] },
        { "id": 41, "joke": "Chuck Norris doesn't wash his clothes. He disembowels them.", "categories": [] },
        { "id": 42, "joke": "Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out.", "categories": [] },
        { "id": 43, "joke": "Police label anyone attacking Chuck Norris as a Code 45-11.... A suicide.", "categories": [] },
        { "id": 44, "joke": "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis.", "categories": [] },
        { "id": 45, "joke": "What was going through the minds of all of Chuck Norris' victims before they died? His shoe.", "categories": [] },
        { "id": 46, "joke": "Chuck Norris once ate three 72 oz. steaks in one hour. He spent the first 45 minutes having sex with his waitress.", "categories": ["explicit"] },
        { "id": 47, "joke": "There is no theory of evolution, just a list of creatures Chuck Norris allows to live.", "categories": [] },
        { "id": 48, "joke": "Chuck Norris can win a game of Connect Four in only three moves.", "categories": [] },
        { "id": 49, "joke": "CNN was originally created as the &quot;Chuck Norris Network&quot; to update Americans with on-the-spot ass kicking in real-time.", "categories": [] },
        { "id": 50, "joke": "Chuck Norris invented Kentucky Fried Chicken's famous secret recipe with eleven herbs and spices. Nobody ever mentions the twelfth ingredient: Fear.", "categories": [] },
        { "id": 51, "joke": "The quickest way to a man's heart is with Chuck Norris' fist.", "categories": [] }]
      }
    ];
    return {categories, jokes};
  }
}
