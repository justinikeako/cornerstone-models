var fs = require("fs");

const color_id_list = [
	"ash",
	"charcoal",
	"spanish_brown",
	"sunset_taupe",
	"tan",
	"shale_brown",
	"sunset_clay",
	"red",
	"terracotta",
	"orange",
	"sunset_tangerine",
	"yellow",
	"green",
	"slate",
	"charcoal_red",
	"red_yellow",
];

const name = "owc";

fs.readFile(`${name}-grey.gltf`, "utf8", (err, data) => {
	if (err) return console.error(err);

	color_id_list.forEach((colorId) => {
		const gltf = data.replace(/grey/g, colorId);

		fs.writeFile(`${name}-${colorId}.gltf`, gltf, (err) => {
			if (err) return console.error(err);

			console.log(`Sucessfully created file '${name}-${colorId}.gltf'`);
		});
	});
});
