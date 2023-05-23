
/**
 * Toute les combinaisons gagnantes sont stockées dans un tableau.
 */
const COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

/**
 * !!!QUESTION!!!
 * Déclarez ces variables:
 * 
 * 1. PLAYER_ONE_CLASS qui sera égale à une string contenant le texte player-1
 * 2. Vérifiez si la variable PLAYER_ONE_CLASS doit être assignée avec const ou let
 * 3. PLAYER_TWO_CLASS qui sera égale à une string contenant le texte player-2
 * 4. Vérifiez si la variable PLAYER_TWO_CLASS doit être assignée avec const ou let
 * 5. PLAYED_CLASS qui sera égale à une string contenant le texte played
 * 6. Vérifiez si la variable PLAYED_CLASS doit être assignée avec const ou let
 * 7. MAX_TURNS qui sera égale au nombre 8
 * 8. Vérifiez si la variable MAX_TURNS doit être assignée avec const ou let
 */
 const PLAYER_ONE_CLASS = 'player-1';//Réponse 1 et 2
 const PLAYER_TWO_CLASS = 'player-2';//Réponse 3 et 4
 const PLAYED_CLASS = 'played';//Réponse 5 et 6
 const MAX_TURNS = 8;//Réponse 7 et 8
/**
 * !!!QUESTION!!!
 * Déclarez ces variables:
 * 
 * 9. playerOneTurn qui sera égale au booléen true
 * 10. Vérifiez si la variable playerOneTurn doit être assignée avec const ou let
 * 11. playerOnePoints qui sera égale au nombre 0
 * 12. Vérifiez si la variable playerOnePoints doit être assignée avec const ou let
 * 13. playerTwoPoints qui sera égale au nombre 0
 * 14. Vérifiez si la variable playerTwoPoints doit être assignée avec const ou let
 * 15. turns qui sera égale au nombre 0
 * 16. Vérifiez si la variable turns doit être assignée avec const ou let
 */
 let playerOneTurn = true;//Réponse 9 et 10
 let playerOnePoints = 0; //Réponse 11 et 12
 let playerTwoPoints = 0;//Réponse 13 et 14
 let turns = 0; // Réponse 15 et 16

/**
 * Ce code déclare et initialise deux variables:
 * 
 * "playerOneCombination" qui est un tableau vide qui va stocker les cases cliquées par le joueur 1.
 * "playerTwoCombination" qui est un tableau vide qui va stocker les cases cliquées par le joueur 2.
 * 
 * Ensuite, il déclare quatre autres variables :
 * 
 * "board" qui est sélectionné en utilisant la méthode "querySelector" pour sélectionner l'élément de classe "board"
 * 
 * "squares" qui est un tableau créé à partir d'un ensemble d'éléments sélectionnés en utilisant la 
 * méthode "querySelectorAll" pour sélectionner tous les éléments de classe "square"
 * 
 * "playerOneScore" qui est sélectionné en utilisant la méthode "querySelector" 
 * pour sélectionner l'élément avec l'id "#player-1-score"
 * 
 * "playerTwoScore" qui est sélectionné en utilisant la méthode "querySelector" 
 * pour sélectionner l'élément avec l'id "#player-2-score"
 * 
 * "alert" qui est sélectionné en utilisant la méthode "querySelector" 
 * pour sélectionner l'élément de classe ".alert" à l'intérieur de la "template" d'un document html.
 * 
 * Ces variables vont être utilisées dans le code pour différentes actions telles que la 
 * gestion de l'affichage des scores, la gestion des actions utilisateur sur les cases et la gestion des alertes.
 */
const playerOneCombination = [];
const playerTwoCombination = [];

const board = document.querySelector('.board');
const squares = Array.from(document.querySelectorAll('.square'));
const playerOneScore = document.querySelector('#player-1-score');
const playerTwoScore = document.querySelector('#player-2-score');
const alert = document.querySelector('template').content.querySelector('.alert');

/**
 * La fonction "addAlert" prend en paramètre un message.
 *  Elle crée une copie de l'élément HTML "alert" en utilisant la méthode "cloneNode" avec l'option "true" 
 * pour inclure tous les enfants de l'élément dans la copie. Ensuite, elle met à jour le contenu 
 * du noeud de l'élément de classe "message" de la copie de "alert" avec le message passé en paramètre.
 * 
 * Ensuite, la fonction ajoute la copie de "alert" à la fin de la page en utilisant la méthode "insertBefore" 
 * en spécifiant que la copie doit être insérée avant le premier enfant de l'élément "body" du document.
 * 
 * Enfin, la fonction utilise "setTimeout" pour déclencher un événement après un certain délai, ici après 3 secondes, 
 * qui simule un clic sur le bouton de la copie de l'alert à l'aide de la méthode "click" de l'élément 
 * "button" enfant de la copie de "alert".
 */
const addAlert = (message) => {
	const alertClone = alert.cloneNode(true);
	alertClone.querySelector('.message').textContent = message;

	document.body.insertBefore(alertClone, document.body.firstChild);

	setTimeout(() => {
		alertClone.querySelector('button').click()
	}, 3000);
}

/**
 * La fonction "checkCombination" prend un seul paramètre, "player", qui est le joueur dont la combinaison doit être vérifiée.
 * Tout d'abord, la fonction définit une variable "combination" qui est définie sur la combinaison du joueur un 
 * si le paramètre "player" passé en est égal à la constante "PLAYER_ONE_CLASS", sinon elle est définie sur la combinaison du joueur deux.
 * 
 * Ensuite, la fonction utilise la méthode JavaScript "some" pour vérifier si l'une des combinaisons de la constante "COMBINATIONS" 
 * sont inclues dans la variable "combination". 
 * 
 * La méthode "some" retourne true si au moins un des éléments de la 
 * liste répond à la condition spécifiée dans la fonction de rappel.
 * 
 * La fonction de rappel passée à la méthode "some" utilise la méthode "every" pour vérifier si tous les éléments de 
 * la liste répondent à la condition spécifiée dans la fonction de rappel. La méthode "every" retourne true 
 * si tous les éléments de la liste répondent à la condition, sinon elle retourne false.
 * 
 * La condition spécifiée dans la fonction de rappel passée à "every" est que chaque élément dans la 
 * liste "combinationToCheck" doit être inclue dans la liste "combination". La méthode "includes" est utilisée 
 * pour vérifier si un élément est inclue dans une liste.
 * 
 * Si l'une des combinaisons de la liste "COMBINATIONS" est incluse dans la variable "combination", 
 * la méthode "some" retournera true et la fonction globale retournera true. Si aucune des combinaisons de 
 * la liste "COMBINATIONS" n'est incluse dans la variable "combination", la méthode "some" retournera false 
 * et la fonction globale retournera false.
 * 
 * En résumé, cette fonction vérifie si l'une des combinaisons de la constante "COMBINATIONS" 
 * sont inclues dans la combinaison du joueur passé en paramètre, 
 * elle retourne true si une correspondance est trouvée, sinon false.
 */
	/**
	 * !!!QUESTION!!!
	 * 17. Utiliser une ternary condition pour définir la variable nommée combination.
	 * 
	 * Si le paramètre player est égal à la constante PLAYER_ONE_CLASS,
	 * la variable "combination" doit être définie sur la variable playerOneCombination.
	 * 
	 * Sinon, la variable "combination" doit être définie sur la variable playerTwoCombination.
	 */
	 
	 const checkCombination = (player) => {
		const combination = player === PLAYER_ONE_CLASS ? playerOneCombination : playerTwoCombination; //Réponse 17
		return COMBINATIONS.some((combinationToCheck) => {
			return combinationToCheck.every((square) => {
				return combination.includes(square);
			});
		});
	}

/**
 * La fonction "declareDraw" ne prend pas de paramètre. 
 * Elle utilise la fonction "addAlert" pour ajouter une alerte avec le message "Draw!" qui signifie match nul.
 * 
 * Ensuite, la fonction utilise la méthode "forEach" pour parcourir 
 * tous les éléments dans le tableau "squares" qui contient tous les éléments de classe "square" dans le document HTML. 
 * 
 * Pour chaque élément, elle utilise la méthode "removeEventListener" pour supprimer l'écouteur d'événement "click" 
 * qui est lié à la fonction "handleClick". 
 * 
 * Cela empêche les cases de continuer à être cliquables après qu'un match nul ait été déclaré.
 */
const declareDraw = () => {
	addAlert('Draw!');

	squares.forEach((square) => {
		square.removeEventListener('click', handleClick);
	});
}

/**
 * La fonction "resetBoard" ne prend pas de paramètre. Elle a pour but de réinitialiser le plateau de jeu pour une nouvelle partie.
 * 
 * Tout d'abord, elle remplace la classe "PLAYER_TWO_CLASS" par la classe "PLAYER_ONE_CLASS" 
 * sur l'élément "board" pour indiquer que c'est au tour du joueur 1 de jouer.
 * 
 * Ensuite, elle utilise la méthode "forEach" pour parcourir tous les éléments 
 * dans le tableau "squares" qui contient tous les éléments de classe "square" 
 * dans le document HTML. Pour chaque élément, elle utilise la méthode "classList.remove" 
 * pour supprimer les classes "PLAYER_ONE_CLASS", "PLAYER_TWO_CLASS" et "PLAYED_CLASS" pour 
 * retirer tous les marqueurs de classe sur les cases. 
 * 
 * Ensuite, elle ajoute de nouveau un écouteur d'événement "click" sur chaque case en utilisant la fonction "handleClick" 
 * pour permettre aux cases de devenir cliquables de nouveau.
 * 
 * Enfin, elle réinitialise les tableaux "playerOneCombination" et "playerTwoCombination" 
 * en mettant leur taille à zéro, réinitialise le compteur de tours à zéro 
 * et indique que c'est au tour du joueur 1 de jouer.
 */
const resetBoard = () => {
	board.classList.replace(PLAYER_TWO_CLASS, PLAYER_ONE_CLASS);
	squares.forEach((square) => {
		square.classList.remove(PLAYER_ONE_CLASS, PLAYER_TWO_CLASS, PLAYED_CLASS);
		square.addEventListener('click', handleClick);
	});
	playerOneCombination.length = 0;
	playerTwoCombination.length = 0;

	/** 
	 * !!!QUESTION!!!
	 * 18. Réinitialiser la variable turns à 0. 
	 */
	 turns = 0;//Réponse 18
	/**
	 * !!!QUESTION!!!
	 * 19. Réinitialiser la variable playerOneTurn à true. 
	 */
	 playerOneTurn = true;//Réponse 19
}

/**
 * La fonction "incrementWinnersScore" prend en paramètre un joueur. 
 * Elle vérifie si le joueur passé en paramètre est égal à la classe "PLAYER_ONE_CLASS" ou non.
 * 
 * Si c'est le cas, la variable "playerOnePoints" est incrémentée de 1. 
 * Sinon, la variable "playerTwoPoints" est incrémentée de 1.
 * 
 * La fonction retourne ensuite la variable qui a été incrémentée en utilisant l'opérateur ternaire, 
 * c'est à dire playerOnePoints si le joueur passé en paramètre est égal à la classe "PLAYER_ONE_CLASS" 
 * ou playerTwoPoints si ce n'est pas le cas. 
 * 
 * Cette fonction permet donc d'incrémenter le score du joueur qui a gagné la partie.
 */
const incrementWinnersScore = (player) => {
	/**
	 * !!!QUESTION!!!
	 * 20. Créer un if statement qui vérifie si le paramètre player est égal à la constante PLAYER_ONE_CLASS.
	 */

	/**
	 * !!!QUESTION!!!
	 * 21. Si oui, incrémenter la variable playerOnePoints de 1.
	 */

	/**
	 * !!!QUESTION!!!
	 * 22. Sinon, incrémenter la variable playerTwoPoints de 1.
	 */
	 if (player === PLAYER_ONE_CLASS) {
        playerOnePoints += 1;
    } else {
        playerTwoPoints += 1;
    } //Réponse 20,21 et 22
}

return player === PLAYER_ONE_CLASS ? playerOnePoints : playerTwoPoints;


/**
 * La fonction "checkWinner" prend en paramètre un joueur. 
 * Elle vérifie d'abord si la combinaison du joueur passé en paramètre est une combinaison gagnante 
 * en utilisant la fonction "checkCombination".
 * 
 * Si c'est le cas, la fonction définit une variable "playerScore" qui est égale à l'élément HTML 
 * de score du joueur 1 si le joueur passé en paramètre est égal à la classe "PLAYER_ONE_CLASS" 
 * ou l'élément HTML de score du joueur 2 sinon.
 * 
 * Ensuite, elle appelle la fonction "incrementWinnersScore" pour incrémenter le score du joueur qui a gagné.
 * 
 * Puis, elle met à jour le contenu de l'élément HTML de score du joueur gagnant avec le nouveau score.
 * 
 * Enfin, elle utilise la fonction "addAlert" pour ajouter une alerte avec un message indiquant quel joueur a gagné.
 * 
 * Ensuite, elle utilise la méthode "forEach" pour parcourir tous les éléments dans le tableau "squares" 
 * et supprimer l'écouteur d'événement "click" lié à la fonction "handleClick" pour empêcher les cases 
 * de continuer à être cliquables après qu'un joueur ait gagné.
 * 
 * La fonction retourne true pour indiquer que quelqu'un a gagné.
 * Sinon, si le nombre de tours est égal à "MAX_TURNS", la fonction "declareDraw" est appelée pour déclarer un match nul
 */
const checkWinner = (player) => {
	if (checkCombination(player)) {
		const playerScore = player === PLAYER_ONE_CLASS ? playerOneScore : playerTwoScore;
		const playerPoints = incrementWinnersScore(player);

		playerScore.textContent = playerPoints;

		/**
		 * !!!QUESTION!!!
		 * 
		 * 23. Modifier la string alertText afin qu'elle affiche le numéro du joueur qui a gagné.
		 * 
		 * Par exemple, si le joueur 1 a gagné, la string alertText devrait être égale à "Player 1 win".
		 * Si le joueur 2 a gagné, la string alertText devrait être égale à "Player 2 win".
		 * 
		 * Vous pouvez modifier la string comme vous le souhaitez. (en modifiant le type de variable, en utilisant une concaténation, etc.)
		 */
		
		 let alertText = playerScore === playerOneScore ? "Player 1 win" : "Player 2 win"; //Réponse 23

		addAlert(alertText);

		squares.forEach((square) => {
			square.removeEventListener('click', handleClick);
		});

		return true;
	} else if (turns === MAX_TURNS) {
		declareDraw();

		return true;
	}

	return false;
};

/**
 * La fonction "handleClick" prend en paramètre un événement "click". 
 * Elle gère les actions à effectuer lorsqu'un utilisateur clique sur une case.
 * 
 * Tout d'abord, elle définit une variable "square" qui est égale à l'élément cible de 
 * l'événement "click". Ensuite, elle définit une variable "player" qui est égale à la classe 
 * "PLAYER_ONE_CLASS" si c'est au tour du joueur 1 de jouer, sinon elle est égale à la classe "PLAYER_TWO_CLASS". 
 * 
 * Ensuite, elle définit une variable "nextPlayer" qui est égale à la classe "PLAYER_TWO_CLASS" 
 * si c'est au tour du joueur 1 de jouer, sinon elle est égale à la classe "PLAYER_ONE_CLASS".
 * 
 * Ensuite, elle utilise la méthode "classList.add" pour ajouter les classes "player" et "PLAYED_CLASS" 
 * à l'élément "square" pour indiquer qu'il a été joué par le joueur en cours. 
 * Elle utilise également la méthode "classList.replace" pour remplacer la classe "player" 
 * par la classe "nextPlayer" sur l'élément "board" pour indiquer quel joueur doit jouer ensuite.
 * 
 * Ensuite, elle vérifie si c'est au tour du joueur 1 de jouer et si c'est le cas, elle ajoute l'ID de la case (numéro de 0 à 8)
 * au tableau "playerOneCombination". Sinon, elle ajoute l'ID de la case au tableau "playerTwoCombination".
 * 
 * Ensuite, elle appelle la fonction "checkWinner" pour vérifier si le joueur en cours a gagné.
 * 
 * Si c'est le cas, la fonction "resetBoard" est appelée pour réinitialiser le plateau de jeu et la fonction est terminée.
 * 
 * Sinon, la variable "playerOneTurn" est inversée pour passer au joueur suivant.
 * 
 * Enfin, la variable "turns" est incrémentée de 1 pour indiquer qu'un tour a été joué.
 */
const handleClick = (event) => {
	const square = event.target;
	square.removeEventListener('click', handleClick);
	/**
	 * !!!QUESTION!!!
	 * 24. Utiliser une ternary operator pour définir la variable nommée player comme suit:
	 * - Si c'est au tour du joueur 1 de jouer, la variable player est égale à la classe PLAYER_ONE_CLASS.
	 * - Sinon, la variable player est égale à la classe PLAYER_TWO_CLASS.
	 */
 const player = playerOneTurn === true ? PLAYER_ONE_CLASS : PLAYER_TWO_CLASS //Réponse 24
	/**
	 * !!!QUESTION!!!
	 * 25. Utiliser une ternary operator pour définir la variable nommée nextPlayer comme suit:
	 * - Si c'est au tour du joueur 1 de jouer, la variable nextPlayer est égale à la classe PLAYER_TWO_CLASS.
	 * - Sinon, la variable nextPlayer est égale à la classe PLAYER_ONE_CLASS.
	 */
	 const nextPlayer = playerOneTurn === true ? PLAYER_TWO_CLASS : PLAYER_ONE_CLASS //Réponse 25
	square.classList.add(player, PLAYED_CLASS);
	board.classList.replace(player, nextPlayer);
	/**
	 * !!!QUESTION!!!
	 * 26. Assignez la variable nommée squareNumber à l'ID de la case.
	 * 
	 * Pour aller chercher l'id, utilisez square.id
	 * 
	 * Assurez-vous de coercer la valeur en Number.
	 */
	 const squareNumber = square.id //Réponse 26
	/**
	 * !!!QUESTION!!!
	 * 27. Vérifier si playerOneTurn est égal à true.
	 * 
	 * Si c'est le cas, utilisez ce code: playerOneCombination.push(squareNumber);
	 * Sinon, utilisez ce code: playerTwoCombination.push(squareNumber);
	 */
	 if (playerOneTurn === true) {
        playerOneCombination.push(squareNumber);
    } else {
        playerTwoCombination.push(squareNumber);

    }
	const hasWinner = checkWinner(player);//Réponse 27
	/**
	 * !!!QUESTION!!!
	 * 28. Vérifier si hasWinner est égal à true.
	 * 
	 * Si c'est le cas, utilisez ce code: return resetBoard();
	 */
	 if (hasWinner === true) {
        return resetBoard();
    }
	/**
	 * !!!QUESTION!!!
	 * 29. Inverser la valeur de la variable "playerOneTurn" pour passer au joueur suivant. Donc si c'est au tour du joueur 1 de jouer,
	 * la variable "playerOneTurn" est égale à true et si c'est au tour du joueur 2 de jouer, la variable "playerOneTurn" est égale à false.
	 */
	 playerOneTurn = !playerOneTurn;//Réponse 29
	/**
	 * !!!QUESTION!!!
	 * 30. Incrémenter la variable "turns" de 1 pour indiquer qu'un tour a été joué.
	 */
	 turns = turns + 1;//Réponse 30
};

(() => {
	squares.forEach((square) => {
		square.addEventListener('click', handleClick);
	});
})();