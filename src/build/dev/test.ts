let texture = 'armor/terrasteel.png'
let attachible = new ActorRenderer()
	.setTexture(texture)
	.addPart("helmAnchor", "head")
	.addBox(-1, 24, 0, 2, 2, 2, 0.01, 0, 0)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("helm", "helmAnchor")
	.addBox(-4.5, 22, -4.5, 9, 11, 9, 0.01, 0, 0)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("helmFront", "helm")
	.addBox(-1.5, 26, -5.5, 3, 8, 7, 0.01, 36, 0)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("helmLeaf1l", "helm")
	.addBox(4.5, 30, -3.5, 2, 3, 1, 0.01, 56, 14)
	.setPivot(4.5, 30, -2.5)
	.setMirrored(true)
	.setRotation(-15, -15, 30)
	.endPart()

	.addPart("helmLeaf2l", "helm")
	.addBox(4.5, 30, -1.5, 2, 5, 1, 0.01, 56, 8)
	.setPivot(4.5, 30, -0.5)
	.setMirrored(true)
	.setRotation(-30, -30, 45)
	.endPart()

	.addPart("helmLeaf3l", "helm")
	.addBox(4.5, 30, 1.5, 2, 7, 1, 0.01, 56, 0)
	.setPivot(4.5, 30, 2.5)
	.setMirrored(true)
	.setRotation(-45, -45, 45)
	.endPart()

	.addPart("helmLeaf1r", "helm")
	.addBox(-6.5, 30, -3.5, 2, 3, 1, 0.01, 56, 14)
	.setPivot(-4.5, 30, -2.5)
	.setRotation(-15, 15, -30)
	.endPart()

	.addPart("helmLeaf2r", "helm")
	.addBox(-6.5, 30, -1.5, 2, 5, 1, 0.01, 56, 8)
	.setPivot(-4.5, 30, -0.5)
	.setRotation(-30, 30, -45)
	.endPart()

	.addPart("helmLeaf3r", "helm")
	.addBox(-6.5, 30, 1.5, 2, 7, 1, 0.01, 56, 0)
	.setPivot(-4.5, 30, 2.5)
	.setRotation(-45, 45, -45)
	.endPart()

	.addPart("helmbranch1l", "helm")
	.addBox(1.5, 32, -3.5, 2, 2, 7, 0.01, 36, 15)
	.setPivot(2.5, 33, -3.5)
	.setMirrored(true)
	.setRotation(30, 15, 0)
	.endPart()

	.addPart("helmbranch2l", "helm")
	.addBox(3.5, 26, -2.5, 2, 2, 7, 0.01, 36, 15)
	.setPivot(4.5, 27, -2.5)
	.setMirrored(true)
	.setRotation(5, 15, 0)
	.endPart()

	.addPart("helmbranch1r", "helm")
	.addBox(-3.5, 32, -3.5, 2, 2, 7, 0.01, 36, 15)
	.setPivot(-2.5, 33, -3.5)
	.setRotation(30, -15, 0)
	.endPart()

	.addPart("helmbranch2r", "helm")
	.addBox(-5.5, 26, -2.5, 2, 2, 7, 0.01, 36, 15)
	.setPivot(-4.5, 27, -2.5)
	.setRotation(5, -15, 0)
	.endPart()

	.addPart("bodyAnchor", "body")
	.addBox(-1, 22, -1, 2, 2, 2, 0.01, 0, 0)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("bodyTop", "bodyAnchor")
	.addBox(-5.5, 18, -3, 11, 6, 6, 0.01, 0, 20)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("bodyBottom", "bodyAnchor")
	.addBox(-4.5, 16, -2.5, 9, 3, 5, 0.01, 0, 32)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("armLAnchor", "leftArm")
	.addBox(4, 21, -1, 2, 2, 2, 0.01, 0, 0)
	.setPivot(4, 22, 0)
	.setMirrored(true)
	.endPart()

	.addPart("armL", "armLAnchor")
	.addBox(-1.5, 13, -2.49, 5, 8, 5, 0.01, 0, 52)
	.setPivot(0, 24, 0)
	.setMirrored(true)
	.endPart()

	.addPart("armLpauldron", "armL")
	.addBox(0.5, 21, -3, 6, 6, 6, 0.01, 0, 40)
	.setPivot(1.5, 24, 0)
	.setMirrored(true)
	.endPart()

	.addPart("armLbranch1", "armLpauldron")
	.addBox(3, 26, -1, 2, 2, 7, 0.01, 36, 15)
	.setPivot(4, 27, -1)
	.setMirrored(true)
	.setRotation(30, 30, 0)
	.endPart()

	.addPart("armLbranch2", "armLpauldron")
	.addBox(4, 24, 0, 2, 2, 5, 0.01, 36, 24)
	.setPivot(5, 26, 0)
	.setMirrored(true)
	.setRotation(5, 45, 0)
	.endPart()

	.addPart("armRAnchor", "rightArm")
	.addBox(-6, 21, -1, 2, 2, 2, 0.01, 0, 0)
	.setPivot(-4, 22, 0)
	.setMirrored(true)
	.endPart()

	.addPart("armR", "armRAnchor")
	.addBox(-3.5, 13, -2.51, 5, 8, 5, 0.01, 0, 52)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("armRpauldron", "armR")
	.addBox(-6.5, 21, -3, 6, 6, 6, 0.01, 0, 40)
	.setPivot(-1.5, 24, 0)
	.endPart()

	.addPart("armRbranch1", "armRpauldron")
	.addBox(-5, 26, -1, 2, 2, 7, 0.01, 36, 15)
	.setPivot(-4, 27, -1)
	.setRotation(30, -30, 0)
	.endPart()

	.addPart("armRbranch2", "armRpauldron")
	.addBox(-6, 24, 0, 2, 2, 5, 0.01, 36, 24)
	.setPivot(-5, 26, 0)
	.setRotation(5, -45, 0)
	.endPart()

	.addPart("pantsAnchor", "body")
	.addBox(-1, 13, -1, 2, 2, 2, 0.01, 0, 0)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("belt", "pantsAnchor")
	.addBox(-4.5, 11, -3, 9, 5, 6, 0.01, 0, 65)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("legL", "leftLeg")
	.addBox(-0.49, 6.01, -2.49, 5, 6, 5, 0.01, 0, 76)
	.setPivot(1.9, 12, 0)
	.setMirrored(true)
	.endPart()

	.addPart("legR", "rightLeg")
	.addBox(-4.51, 6.01, -2.51, 5, 6, 5, 0.01, 0, 76)
	.setPivot(-1.9, 12, 0)
	.endPart()

	.addPart("bootL", "leftLeg")
	.addBox(-0.49, -0.5, -2.49, 5, 4, 5, 0.01, 0, 94)
	.setPivot(1.9, 12, 0)
	.setMirrored(true)
	.endPart()

	.addPart("bootLtop", "bootL")
	.addBox(-2.39, 16, -2.49, 6, 2, 5, 0.01, 0, 87)
	.setPivot(0, 24, 0)
	.setMirrored(true)
	.endPart()

	.addPart("bootLbranch1", "bootLtop")
	.addBox(2.5, 17, 0, 2, 2, 7, 0.01, 36, 15)
	.setPivot(3.5, 18, 0)
	.setMirrored(true)
	.setRotation(15, 15, -5)
	.endPart()

	.addPart("bootLbranch2", "bootLtop")
	.addBox(1.5, 14, 0, 2, 2, 5, 0.01, 36, 24)
	.setPivot(2.5, 15, 0)
	.setMirrored(true)
	.setRotation(5, 45, 0)
	.endPart()

	.addPart("bootR", "rightLeg")
	.addBox(-4.51, -0.5, -2.51, 5, 4, 5, 0.01, 0, 94)
	.setPivot(-1.9, 12, 0)
	.endPart()

	.addPart("bootRtop", "bootR")
	.addBox(-3.61, 16, -2.51, 6, 2, 5, 0.01, 0, 87)
	.setPivot(0, 24, 0)
	.endPart()

	.addPart("bootRbranch1", "bootRtop")
	.addBox(-4.5, 17, 0, 2, 2, 7, 0.01, 36, 15)
	.setPivot(-3.5, 18, 0)
	.setRotation(15, -15, 5)
	.endPart()

	.addPart("bootRbranch2", "bootRtop")
	.addBox(-3.5, 14, 0.5, 2, 2, 5, 0.01, 36, 24)
	.setPivot(-2.5, 15, 0.5)
	.setRotation(5, -45, 0)
	.endPart()

Callback.addCallback("PlayerAttack", function (attacker, entity) {
	new AttachableRender(attacker).setRenderer(attachible)
	new AttachableRender(entity).setRenderer(attachible)
})
