const fetchPokemon = () => {
	const pokemonInput = document.getElementById('pokemonInput');
	let pokeInput = pokemonInput.value.toLowerCase();
	const URL = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
	fetch(URL)
		.then((results) => {
			if (results.status != '200') {
				console.log(results);
				pokeMainData(
					'img/pokeball.png',
					'No encontrado',
					'-',
					'-',
					'-'
				);
			} else {
				return results.json();
			}
		})
		.then((data) => {
			console.log(data);
			let pokeImg = data.sprites.other.dream_world.front_default;
			let pokeName = data.name.toUpperCase();
			let pokeType = data.types[0].type.name;
			let pokeHeight = data.height;
			let pokeWeight = data.weight;
			pokeMainData(
				pokeImg,
				pokeName,
				pokeType,
				pokeHeight / 10,
				pokeWeight / 10
			);
			let pokeHp = parseInt(data.stats[0].base_stat);
			let pokeAttack = parseInt(data.stats[1].base_stat);
			let pokeDefense = parseInt(data.stats[2].base_stat);
			let pokeSAttack = parseInt(data.stats[3].base_stat);
			let pokeSDefense = parseInt(data.stats[4].base_stat);
			let pokeSpeed = parseInt(data.stats[5].base_stat);
			pokeStats(
				pokeHp,
				pokeAttack,
				pokeDefense,
				pokeSAttack,
				pokeSDefense,
				pokeSpeed
			);
			let movements = data.moves.map((move) => move.move.name);
			pokeMoves(movements);
		});
};

fetchPokemon();

const pokeMainData = (url, names, type, height, weight) => {
	const pokeImg = document.getElementById('pokeImg');
	pokeImg.src = url;
	const pokeName = document.getElementById('pokeName');
	pokeName.innerHTML = names;
	const pokeType = document.getElementById('pokeType');
	pokeType.innerHTML = type;
	const pokeHeight = document.getElementById('pokeHeight');
	pokeHeight.innerHTML = height;
	const pokeWeight = document.getElementById('pokeWeight');
	pokeWeight.innerHTML = weight;
};

const pokeStats = (hp, attack, defense, sAttack, sDefense, speed) => {
	const pokeHp = document.getElementById('hp');
	pokeHp.innerHTML = hp;
	pokeHp.style.display = 'flex';
	pokeHp.style.width = `${(hp * 100) / 200}%`;
	const pokeAttack = document.getElementById('attack');
	pokeAttack.innerHTML = attack;
	pokeAttack.style.width = `${(attack * 100) / 200}%`;
	pokeAttack.style.display = 'flex';
	const pokeDefense = document.getElementById('defense');
	pokeDefense.innerHTML = defense;
	pokeDefense.style.display = 'flex';
	pokeDefense.style.width = `${(defense * 100) / 200}%`;
	const pokeSAttack = document.getElementById('sAttack');
	pokeSAttack.innerHTML = sAttack;
	pokeSAttack.style.display = 'flex';
	pokeSAttack.style.width = `${(sAttack * 100) / 200}%`;
	const pokeSDefense = document.getElementById('sDefense');
	pokeSDefense.innerHTML = sDefense;
	pokeSDefense.style.display = 'flex';
	pokeSDefense.style.width = `${(sDefense * 100) / 200}%`;
	const pokeSpeed = document.getElementById('speed');
	pokeSpeed.innerHTML = speed;
	pokeSpeed.style.display = 'flex';
	pokeSpeed.style.width = `${(speed * 100) / 200}%`;
};

const pokeMoves = (movements) => {
	const pokeMovements = document.getElementById('pokeMoves');
	pokeMovements.innerHTML = movements;
};
