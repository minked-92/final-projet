<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Config\Doctrine\Orm\EntityManagerConfig;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/inscription", name="security_registration")
     */
    public function registration(Request $request, EntityManagerInterface $manager, UserPasswordEncoderInterface $encoder) 
    {
        // Crée une nouvelle instance de la classe User
        $user = new User();

        // Crée un formulaire d'inscription en utilisant RegistrationType
        $form = $this->createForm(RegistrationType::class, $user);

        // Gère la soumission du formulaire
        $form->handleRequest($request);

        // Vérifie si le formulaire a été soumis et est valide
        if ($form->isSubmitted() && $form->isValid()) {
            // Encode le mot de passe de l'utilisateur
            $hash = $encoder->encodePassword($user, $user->getPassword());

            // Définit le mot de passe de l'utilisateur avec le mot de passe encodé
            $user->setPassword($hash);

            // Enregistre l'utilisateur dans la base de données
            $manager->persist($user);
            $manager->flush();

            // Redirige l'utilisateur vers la page de connexion après une inscription réussie
            return $this->redirectToRoute('security_login');
            
            // Vous pouvez ajouter des messages de succès ou rediriger l'utilisateur ici
        }
        
        // Rend la vue du formulaire d'inscription avec le formulaire créé
        return $this->render('security/registration.html.twig', [
            'form' => $form->createView()
        ]);
    }


    /**
     * @Route("/connexion", name="security_login")
     */

    public function login(){
        return $this->render('security/login.html.twig');
    }


    /**
     * @Route("/deconnexion", name="security_logout")
     */

     public function logout(){}
}
