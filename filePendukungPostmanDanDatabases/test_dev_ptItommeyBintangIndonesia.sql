PGDMP     #                    z         "   test_dev_ptItommeyBintangIndonesia "   12.11 (Ubuntu 12.11-1.pgdg20.04+1)     14.4 (Ubuntu 14.4-1.pgdg20.04+1)     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    519646 "   test_dev_ptItommeyBintangIndonesia    DATABASE     y   CREATE DATABASE "test_dev_ptItommeyBintangIndonesia" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
 4   DROP DATABASE "test_dev_ptItommeyBintangIndonesia";
                postgres    false            ?            1259    519647    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            ?            1259    519765    tbl_products    TABLE     ?   CREATE TABLE public.tbl_products (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    qty integer NOT NULL,
    picture text,
    "expiredAt" date NOT NULL,
    "isActive" boolean
);
     DROP TABLE public.tbl_products;
       public         heap    postgres    false            ?            1259    519763    tbl_products_id_seq    SEQUENCE     |   CREATE SEQUENCE public.tbl_products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.tbl_products_id_seq;
       public          postgres    false    204            ?           0    0    tbl_products_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.tbl_products_id_seq OWNED BY public.tbl_products.id;
          public          postgres    false    203                       2604    519768    tbl_products id    DEFAULT     r   ALTER TABLE ONLY public.tbl_products ALTER COLUMN id SET DEFAULT nextval('public.tbl_products_id_seq'::regclass);
 >   ALTER TABLE public.tbl_products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    203    204            ?          0    519647    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    202   ?       ?          0    519765    tbl_products 
   TABLE DATA           W   COPY public.tbl_products (id, name, qty, picture, "expiredAt", "isActive") FROM stdin;
    public          postgres    false    204          ?           0    0    tbl_products_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.tbl_products_id_seq', 5, true);
          public          postgres    false    203                       2606    519651     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    202                       2606    519773    tbl_products tbl_products_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.tbl_products
    ADD CONSTRAINT tbl_products_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.tbl_products DROP CONSTRAINT tbl_products_pkey;
       public            postgres    false    204            ?   3   x?32022?44005534?M.JM,I?/Iʉ/(?O)M.)??*?????? 
??      ?   K   x?3?I-.Q(?O)M.Q0?440????4202?5??54?,?2BUd?U?1?"c??LP?`Ud?????=... ??-|     