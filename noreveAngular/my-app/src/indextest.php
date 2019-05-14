<?php 
  $bdd = new PDO('mysql:host=dev.noreve/phpmyadmin;dbname=noreve;charset=utf8', 'noreve', 'Noreve1!');
  $requete = $bdd->query('SELECT * FROM ps_alias');
  while ($donnees = $requete->fetch())
  {
?>

    <p>
    <?php echo $donnees['alias']; ?>
    </p>

<?php
  }

  $reponse->closeCursor();
?>