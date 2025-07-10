<?php
// ⚠️MIS EN COMMENTAIRES POUR EVITER CONFLIT AVEC BDD ET AUTRE PHP.
// $host = 'db';
// $dbname = 'bddVehicule';
// $user = 'root';
// $password = 'root';
// ⚠️MIS EN COMMENTAIRES POUR EVITER CONFLIT AVEC BDD ET AUTRE PHP.
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    // Active les erreurs PDO en exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie !";
    echo "<br>";
    echo "salut";
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}

$sqlAll = "SELECT * FROM `vehicule`";
$stmtAll = $pdo->prepare($sqlAll);
$stmtAll->execute();
$resultsAll = $stmtAll->fetchAll(PDO::FETCH_ASSOC);


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="POST">
        <label>Ajout couleur en BDD</label>
        <input type="text" name="nomDeLaCouleur">
        <input type="submit" name="envoiDonneesCouleur" value="Envoyé une couleur">
        <br>
        <label>Ajout type de véhicule en BDD</label>
        <input type="text" name="nomTypeVehicule">
        <input type="submit" name="envoiDonneesType" value="Envoyé un type de véhicule">
    </form>

    <?php

    $sqlCouleur = "SELECT * FROM `couleur`";
    $stmtCouleur = $pdo->prepare($sqlCouleur);
    $stmtCouleur->execute();
    $resultCouleurs = $stmtCouleur->fetchAll(PDO::FETCH_ASSOC);
    var_dump($resultCouleurs);
    echo "<br>";
    $sqlType = "SELECT * FROM `typeVehicule`";
    $stmtType = $pdo->prepare($sqlType);
    $stmtType->execute();
    $resultTypes = $stmtType->fetchAll(PDO::FETCH_ASSOC);
    var_dump($resultTypes);


    ?>


    <form method="POST">
        <label>Ajoutez un véhicule</label>
        <input type="text" name="immatriculation">
        <select name="selectCouleur">
            <?php
            foreach ($resultCouleurs as $key => $value) {
                echo "<option value='" . $value["idCouleur"] . "'>" . $value['nomCouleur'] . "</option>";
            }
            ?>
        </select>
        <select name="selectType">
            <?php
            foreach ($resultTypes as $key => $value) {
                echo "<option value='" . $value["idType"] . "'>" . $value['nomType'] . "</option>";
            }
            ?>
        </select>
        <input type="submit" name="envoiDonneesImmatriculation">
    </form>
    <hr>

    <?php
    // var_dump($resultsAll);
    foreach ($resultsAll as $key => $value) {
        $idASupprimer = $value['idVehicule'];
        echo "<form method='POST'>";
        echo "<input type='hidden' name='idDelete' value='$idASupprimer'>";
        foreach ($value as $key => $value2) {
            echo $key . " : " . $value2 . " - ";
        }
        echo '<a href="?id=' . $idASupprimer . '">Modifier</a>';
        echo '<input type="submit" name="supprimer" value="delete"><br>';
        echo "</form>";
    }
    if (isset($_POST['supprimer'])) {
        $idToDelete = $_POST['idDelete'];
        $sqlDelete = "DELETE FROM `vehicule` WHERE idVehicule = '$idToDelete'";
        $stmtDelete = $pdo->prepare($sqlDelete);
        $stmtDelete->execute();
    }
    ?>

</body>

</html>

<?php
//Avec le submit + if isset $_POST -> envoi de données.  
if (isset($_POST['envoiDonneesCouleur'])) {
    //Declaration variable évite concaténation en requete -> facilite la demande
    $couleur = $_POST['nomDeLaCouleur'];
    //Requete sql pour insérer value en BDD.
    $sql = "INSERT INTO `couleur`(`nomCouleur`) VALUES ('$couleur')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    echo "C'est ok !";
}

if (isset($_POST['envoiDonneesType'])) {
    $type = $_POST['nomTypeVehicule'];
    $sql = "INSERT INTO `typeVehicule`(`nomType`) VALUES ('$type')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    echo "C'est ok !";
}

if (isset($_POST['envoiDonneesImmatriculation'])) {
    $color = $_POST['selectCouleur'];
    $immatriculation = $_POST['immatriculation'];
    $type = $_POST["selectType"];
    $sql = "INSERT INTO `vehicule`(`immatriculation`, `typeVehicule`, `couleur`) VALUES ('$immatriculation','$type','$color')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    echo "C'est ok !";
}

?>

<hr>

<?php

if (isset($_GET["id"])) {
    $id = $_GET['id'];
    $sqlId = "SELECT * FROM `vehicule` WHERE idVehicule = '$id'";
    $stmtId = $pdo->prepare($sqlId);
    $stmtId->execute();

    $resultsId = $stmtId->fetchAll(PDO::FETCH_ASSOC);

    echo '<form method="POST">
    <label for="">ID</label>
    <input type="text" name="idUpdate" value="' . $resultsId[0]['idVehicule'] . '">
    <br>
    <label for="">immatriculation</label>
    <input type="text" name="immatriculationUpdate" value="' . $resultsId[0]['immatriculation'] . '">
    <br>
    <label for="">Type</label>
    <input type="text" name="typeUpdate" value="' . $resultsId[0]['typeVehicule'] . '">
    <br>
    <label for="">Couleur</label>
    <input type="text" name="couleurUpdate" value="' . $resultsId[0]['couleur'] . '">
    <br>
    <input type="submit" name="submitUpdate" value="Mettre à jour la BDD">
</form>';

    var_dump($resultsId);
}

if (isset($_POST['submitUpdate'])) {

    $idUpdate = $_POST['idUpdate'];
    $immatriculation = $_POST['immatriculationUpdate'];
    $type = $_POST['typeUpdate'];
    $couleur = $_POST['couleurUpdate'];

    $sqlUpdate = "UPDATE `vehicule` SET `immatriculation`='$immatriculation',`typeVehicule`='$type',`couleur`='$couleur' WHERE idVehicule='$idUpdate'";
    $stmtUpdate = $pdo->prepare($sqlUpdate);
    $stmtUpdate->execute();
}

?>